import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { DashboardTitle, Form, Repositories, Error } from './styles';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = useState('');

  // useEffect(()=> {

  // }, []);

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError("Enter the repository's author/name");
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError("Repository does not exist");
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <DashboardTitle>Explore repositories on Github</DashboardTitle>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Repository name"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>

        {repositories.map(repository => (
          <a key={repository.full_name} href="test">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}

      </Repositories>
    </>
  );
};

export default Dashboard;
