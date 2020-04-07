import React from 'react';
import { FaHome } from 'react-icons/fa';

import './styles.css';
import BackLink from '~/components/BackLink';

export default function page404() {
  return (
    <div className="container">
      <div className="content">
        <p>Erro 403 - Acesso Negado</p>
        <BackLink to="/">
          <FaHome height={16} color="#E02041" />
          Início
        </BackLink>
      </div>
    </div>
  );
}
