import { v4 } from 'uuid';
import { Login, Register } from './pages';

const routes = [
  { path: '/login', component: Login, index: v4() },
  { path: '/register', component: Register, index: v4() },
  { path: 'dashboard', component: '', index: v4() },
];

export { routes as default, routes };
