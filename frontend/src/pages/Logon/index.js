import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import Button from '~/components/Button';
import BackLink from '~/components/BackLink';
import Input from '~/components/Input';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });
      const { ong } = response.data;

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', ong.name);

      history.push('/dashboard');
    } catch (err) {
      toast.error('Falha no login, tente novamente!');
    }
  }
  return (
    <div className="logon-container">
      <ToastContainer />
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1> Faça seu logon </h1>
          <Input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <BackLink to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </BackLink>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
