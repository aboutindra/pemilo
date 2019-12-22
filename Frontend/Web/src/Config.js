import Index from './Component/Index.jsx';
import Login from './Component/Admin/Login';

export const Routes = [
    {
        path: "/",
        component: Index,
    },            
    {
        path: '/login',
        component: Login
    }
];
