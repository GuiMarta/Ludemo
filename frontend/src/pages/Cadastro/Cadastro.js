import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import CadastroValidacao from './CadastroValidacao.js';
import axios from 'axios';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';


function Cadastro() {

    const navigateMobile = useNavigate();

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigateMobile]);

    const [mensagem, setMensagem] = useState('');

    const [values, setValues] = useState({
        crp: '',
        nome: '',
        password: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };


    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = CadastroValidacao(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const data = {
                    crp: values.crp,
                    nome: values.nome,
                    senha: values.password,
                    email: values.email
                };

                const response = await axios.post('https://ludemo-api.vercel.app/cadastro', data);
                setMensagem('Cadastro realizado! Redirecionando para a página de login...');
                
                
                setTimeout(() => {
                    navigate('/Login'); 
                }, 2000);

            }
            catch (error) {
                console.error('Erro ao cadastrar:', error);
                alert('Deu erro!');

            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center main-body vh-100'>
            <div className='bg-white p-3 rounded h-85'>
                <h2 className=''>Cadastro De Profissional</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='crp'><strong>CRP</strong></label>
                        <input type='text' placeholder='CRP do Profissional' onChange={handleInput} name='crp' className='form-control rounded-0' />
                        <span>{errors.crp && <span className='text-danger'>{errors.crp}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='nome'><strong>Nome</strong></label>
                        <input type='text' placeholder='Nome do Profissional' onChange={handleInput} name='nome' className='form-control rounded-0' />
                        <span>{errors.nome && <span className='text-danger'>{errors.nome}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Senha</strong></label>
                        <p style={{ fontSize: '12px' }}>A senha deve conter pelo menos 8 caracteres.</p>
                        <input type='password' placeholder='Senha do Profissional' onChange={handleInput} name='password' className='form-control rounded-0' />
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Email do Profissional' onChange={handleInput} name='email' className='form-control rounded-0' />
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>
                    <button type='submit' className='btn btn-success w-100'><strong>Cadastrar</strong></button>
                    <p className='pt-3 small'>Ludemo.com a melhor plataforma de auxilio profissional.</p>
                    
                </form>
                <p className='text-success'>{mensagem}</p>
                <Link to="/Login" className='btn bt-primary border w-100'>Retornar para Login</Link>
            </div>
        </div>
    );
}

export default Cadastro;
