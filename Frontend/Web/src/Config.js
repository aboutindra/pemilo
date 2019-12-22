import Index from './Component/Index.jsx';
import Login from './Component/Admin/Login';
import Signup from './Component/Admin/Signup';

export const Routes = [
    {
        path: "/",
        component: Index,
    },            
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Signup
    },
];
