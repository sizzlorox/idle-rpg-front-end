import Auth from './modules/Auth';

// Pages
import Home from './pages/Home';

const routes = {
  component: Home,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/game',
      component: () => {
        if (Auth.isUserAuthenticated()) {
          return 'Game';
        }

        return Home;
      }
    }
  ]
};
export default routes;
