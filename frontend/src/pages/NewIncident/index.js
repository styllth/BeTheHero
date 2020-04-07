import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import BackLink from '~/components/BackLink';
import Input, { Textarea } from '~/components/Input';
import Button from '~/components/Button';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: { Authorization: ongId },
      });

      history.push('/profile');
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Erro no cadastro, tente novamente');
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para dashboard
          </BackLink>
        </section>

        <form onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
