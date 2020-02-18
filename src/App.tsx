import { Provider } from '@urql/preact';
import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import gqlClient from './global/graphql';
import Loading from './common/Loading';

export const App = () => (
  <Provider value={gqlClient}>
    <Router>
      <AsyncRoute path="/" getComponent={() => import('./modules/landing').then(m => m.default)} loading={Loading} />
      <AsyncRoute path="/auth" getComponent={() => import('./modules/auth').then(m => m.default)} loading={Loading} />
    </Router>
  </Provider>
);