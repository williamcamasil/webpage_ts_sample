import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import ListTeam from './screens/ListTeam';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/heroes" exact>
          <ListTeam />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
