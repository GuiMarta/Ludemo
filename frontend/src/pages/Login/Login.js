import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import validaLogin from './LoginValidação';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        crp: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

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
        if (Object.keys(validationErrors).length > 0){
            console.log('Erros de Validação:', validationErrors);
        }
        
        // Verifica se todos os erros estão vazios
        const hasErrors = Object.values(validationErrors).some(error => error !== '');

        if (!hasErrors) {
            try {
                const data = {
                    crp: values.crp,
                    senha: values.password,
                };
                
                console.log('Enviando dados para o servidor:', data);
                const response = await axios.post('http://localhost:5000/login', data);

                console.log('Resposta do servidor:', response.data);
                if (response.status === 204) {
                    setMensagemErro('Usuário não encontrado, verifique as credenciais.');   
                }
                if (response.data.Login === true) {
                    setMensagemSucesso('Login realizado com sucesso!');
                    setTimeout(() => {navigate('/dashboard'); }, 2000);
                }
        
                
            } 
            catch (error) {
                alert('Erro ao autenticar usuário, verifique o console.');
                console.error('Erro ao autenticar usuário:', error);
            }
        } else {
            console.log('Formulário não enviado ao servidor, corrija os erros de validação.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded h-70 '>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='crp'><strong>CRP</strong></label>
                        <input type='text' name='crp' onChange={handleInput} placeholder='CRP do Profissional' className='form-control rounded-0' />
                        <span>{errors.crp && <span className='text-danger' > {errors.crp} </span> }</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Senha</strong></label>
                        <input type='password' name='password' onChange={handleInput} placeholder='Senha' className='form-control rounded-0' />
                        <span>{errors.password && <span className='text-danger' > {errors.password} </span> }</span>
                    </div>
                    <button type='submit' className='btn btn-success w-100'> <strong>Login</strong></button>
                    <p className='text-danger' >{mensagemErro}</p>
                    <p className='pt-3 small' >Ludemo.com a melhor plataforma de auxilio profissional.</p>
                    <p className='text-success' >{mensagemSucesso}</p>
                    <Link to="/Cadastrar" className='btn btn-default border w-100 bg-light text-decoration-none'>Cadastrar</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
