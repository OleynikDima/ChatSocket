import { lazy } from 'react';

export default [
  {
    path: '/chat',
    label: 'MainChat',
    exact: true,
    component: lazy(() => import('../View/MainChat')),
    private: true,
    restricted: false,
  },

  {
    path: '/',
    label: 'Login',
    exact: true,
    component: lazy(() => import('../View/EnterLogin')),
    private: false,
    restricted: true,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('../View/RegisterUser')),
    private: false,
    restricted: true,
  },
];
