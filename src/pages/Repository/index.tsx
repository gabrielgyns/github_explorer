import React from 'react';
import { useRouteMatch , Link} from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/dashboard">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/25357952?s=400&v=4" alt="Gabriel Soares"/>
          <div>
            <strong>gabrielgyns/ecoleta</strong>
            <p>Descrição repositório.</p>
          </div>
        </header>

        <ul></ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
