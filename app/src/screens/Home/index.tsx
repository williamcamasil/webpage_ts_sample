import Button from '../../components/Button';
import MockList from '../../components/MockComponents/MockList';
import MockUnit from '../../components/MockComponents/MockUnit';

const Home = () => {
  const handleClick = () => {
    console.log('Clicou aqui');
  };

  return (
    <div>
      <p>Home Screen</p>

      <MockList />
      <MockUnit />

      {/* <button onClick={handleClick}>Clicou!</button> */}
      <Button textButton={'Clique aqui'} click={() => handleClick} />
    </div>
  );
};

export default Home;
