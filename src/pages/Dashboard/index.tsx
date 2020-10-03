import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { DashboardTitle, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <DashboardTitle>Explore repositories on Github</DashboardTitle>

      <Form action="">
        <input type="text" placeholder="Repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/54996062?s=460&u=aaf5a4a3287c87691cab70e3c51ff5ffe7421154&v=4"
            alt="Sergio Pereira" />
          <div>
            <strong>sergiohgp/GoBarber</strong>
            <p>Easy peasy highly scalable NodeJS & TypeScript application</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/54996062?s=460&u=aaf5a4a3287c87691cab70e3c51ff5ffe7421154&v=4"
            alt="Sergio Pereira" />
          <div>
            <strong>sergiohgp/GoBarber</strong>
            <p>Easy peasy highly scalable NodeJS & TypeScript application</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img src="https://avatars0.githubusercontent.com/u/54996062?s=460&u=aaf5a4a3287c87691cab70e3c51ff5ffe7421154&v=4"
            alt="Sergio Pereira" />
          <div>
            <strong>sergiohgp/GoBarber</strong>
            <p>Easy peasy highly scalable NodeJS & TypeScript application</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
