import Navbar from 'components/Navbar';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Desafio Github API</h2>
        <p>Bootcamp Spring React - DevSuperior</p>
        <a className="btn btn-primary" href="#" role="button">Começar</a>
      </div>
    </>
  );
};

export default Home;
