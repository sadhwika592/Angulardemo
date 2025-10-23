import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { Users } from './components/users/users';
import { Products } from './components/products/products';
import { Uploadvideos } from './components/uploadvideos/uploadvideos';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'aboutus', component:Aboutus},
    {path:'careers', component:Careers},
    {path:'contactus', component:Contactus},
    {path:'users', component:Users},
    {path:'products', component:Products},
    // {path:'notfound', component:Notfound}
];
