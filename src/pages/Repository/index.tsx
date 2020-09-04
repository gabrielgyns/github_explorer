import React, { useState, useEffect } from 'react';
import { useRouteMatch , Link} from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    // api.get(`repos/${params.repository}`).then(response => {
    //   console.log(response.data);
    // });

    // api.get(`repos/${params.repository}/issues`).then(response => {
    //   console.log(response.data);
    // });
    async function loadData() {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ]);

      console.log(repository.data);
      console.log(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
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

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
          <Link
            to={`/repositories`}
          >
            <div>
              <strong>repository.full_name</strong>
              <p>repository.description</p>
            </div>
            <FiChevronRight size={50} />
          </Link>
      </Issues>
    </>
  );
};

export default Repository;
