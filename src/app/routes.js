import Auth from './modules/Auth';

// Pages
import Home from './pages/Home';
import Game from './pages/Game';

const routes = [
  {
    path: '/',
    component: () => Home
  },
  {
    path: '/game',
    component: () => {
      if (Auth.isUserAuthenticated()) {
        return Game;
      }

      return Home;
    }
  }
];
export default routes;
