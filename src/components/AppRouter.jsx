import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './contact';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
