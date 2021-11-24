import Button from '../../components/Button';
import MockList from '../../components/MockComponents/MockList';
import MockUnit from '../../components/MockComponents/MockUnit';

const Home = () => {
  return (
    <div>
      <p>Home Screen</p>

      <MockList />
      <MockUnit />

      <Button />
    </div>
  );
};

export default Home;
