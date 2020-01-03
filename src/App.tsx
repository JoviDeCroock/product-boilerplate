import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Loading from './common/Loading'

export const App = () => (
  <Router>
    <AsyncRoute path="/" getComponent={() => import('./modules/landing').then(m => m.default)} loading={Loading} />
    <AsyncRoute path="/auth" getComponent={() => import('./modules/auth').then(m => m.default)} loading={Loading} />
  </Router>
);