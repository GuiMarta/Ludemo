import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import validaLogin from './LoginValidação';
import axios from 'axios';
import './login.css';
import logo from './imgs/LogoLudemo.png';
import Footer from '../../components/footer';
import { isMobile } from 'react-device-detect';
import { Spinner } from 'react-bootstrap'; // Importando Spinner do Bootstrap  
import { useEffect } from 'react';

function Login() {

    const navigateMobile = useNavigate();

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigateMobile]);



    const [values, setValues] = useState({
        crp: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Estado para controle do ícone de carregamento
    const [mensagemErro, setMensagemErro] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Valida os valores do formulário
        const validationErrors = validaLogin(values);
        setErrors(validationErrors);

        //Se houver erros de validação, exibe no console
        if (Object.keys(validationErrors).length > 0) {
            console.log('Erros de Validação:', validationErrors);
        }

        // Verifica se todos os erros estão vazios
        const hasErrors = Object.values(validationErrors).some(error => error !== '');

        if (!hasErrors) {

            setLoading(true); // Ativa o ícone de carregamento
            try {
                const data = {
                    crp: values.crp,
                    senha: values.password,
                };

                console.log('Enviando dados para o servidor:', data);
                const response = await axios.post('https://ludemo-api.vercel.app/login', data);
                // const response = await axios.post('http://localhost:5000/login', data);

                console.log('Resposta do servidor:', response.data);
                if (response.status === 204) {
                    setMensagemErro('Usuário não encontrado, verifique as credenciais.');
                }
                if (response.data.Login === true) {
                    setMensagemSucesso('Login realizado com sucesso!');
                    setMensagemErro('');

                    //guardando algumas coisinhas no localStorage:
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('nome', response.data.result[0].nome);
                    localStorage.setItem('crp', response.data.result[0].crp);
                    localStorage.setItem('email', response.data.result[0].email);
                    localStorage.setItem('idProfissional', response.data.result[0].idprofissional);

                    setTimeout(() => { navigate('/dashboard'); }, 1500);

                }


            }
            catch (error) {
                alert('API não disponível no momento, tentando reconectar...');
                console.error('Erro ao autenticar usuário:', error);
            }
            finally {
                setLoading(false); // Finaliza o carregamento
            }
        } else {
            console.log('Formulário não enviado ao servidor, corrija os erros de validação.');
        }
    };

    return (
        <div>
            <header>
                <div>
                    <img className='logo-header' src={logo} alt="" />
                </div>
                <div className="slogan">
                    Ludemo: Plataforma de auxílio aos profissionais.
                </div>
                <div>
                    <Link to='/' className='dois'>Página Incial</Link>
                </div>
            </header>

            <div className='main-body'>
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <div className='bg-white p-3 rounded h-70 '>
                        <h1>Login</h1>
                        <form className='align' action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='crp'><strong>CRP</strong></label>
                                <input type='text' name='crp' onChange={handleInput} placeholder='CRP do Profissional' className='form-control rounded-0' />
                                <span>{errors.crp && <span className='text-danger' > {errors.crp} </span>}</span>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'><strong>Senha</strong></label>
                                <input type='password' name='password' onChange={handleInput} placeholder='Senha' className='form-control rounded-0' />
                                <span>{errors.password && <span className='text-danger' > {errors.password} </span>}</span>
                            </div>

                            {loading ? (
                                <div className="text-center">
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Carregando...</span>
                                    </Spinner>
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center  ">
                                    <button type='submit' className='btn btn-success w-100'><strong>Login</strong></button>
                                </div>
                            )}


                            <p className='text-danger mt-3' >{mensagemErro}</p>
                            <p className='pt-1 small' >Ludemo.com a melhor plataforma de auxilio profissional.</p>
                            <p className='text-success' >{mensagemSucesso}</p>
                            <div className="d-flex justify-content-center  ">
                            <Link to="/Cadastrar" className='btn btn-default border w-100 bg-light text-decoration-none'>Cadastrar</Link>
                            </div>
                                
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Login;
