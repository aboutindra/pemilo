import Index from './Component/Index';
import Say from './Component/Admin/Say.js';

export const Routes = [
    {
        path: "/",
        component: Index,
    },        
    {
        path: "/say",
        component: Say,
    },        
];
