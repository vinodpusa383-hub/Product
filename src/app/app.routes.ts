import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CategoryPage } from './category-page/category-page';
import { Delivery } from './delivery/delivery';



export const routes: Routes = [
{
    path:'navbar', component: Navbar
},
{
    path:'categorypage', component: CategoryPage
},
{
    path:'delivery', component: Delivery
}
];
