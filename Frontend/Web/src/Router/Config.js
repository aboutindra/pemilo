import Index from '../Component/Index.jsx';
import Login from '../Component/Login';

import IndexAdmin from '../Layout/LayoutDashboard';
import IndexClient from '../Component/Client/Index';

export const Routes = [
  {
    path: "/",
    component: Index,
  },            
  {
    path: '/l',
    component: Login
  },  
  {
    path: '/d/:email',
    component: IndexAdmin
  },    
  {
    path: '/s',
    component: IndexClient
  }   
];
