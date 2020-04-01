import React from 'react';

import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import './styles.css';
import '../../../styles/global.css';

export default function page404() {
  return (
    <div className="container">
      <div className="content">
        <p>Erro 404 - Página não Encontrada</p>
        <Link className="back-link" to="/">
          <FaHome height={16} color="#E02041" />
          Início
        </Link>
      </div>
    </div>
  );
}
