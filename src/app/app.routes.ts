import { Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AftersubmitComponent } from './aftersubmit/aftersubmit.component';
import { ProductsComponent } from './products/products.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { QrgenerateComponent } from './qrgenerate/qrgenerate.component';

export const routes: Routes = [
    {
        path:"user",
        component: UserAuthComponent
    },
    {
        path:"aftersubmit",
        component: AftersubmitComponent
    },
    {
        path:"products",
        component: ProductsComponent
    },
    {
        path:"todo",
        component: TodoComponent
    },
    {
        path:"qrgenerate",
        component: QrgenerateComponent
    },
    {
        path:"",
        component: HomeComponent
    }
];
