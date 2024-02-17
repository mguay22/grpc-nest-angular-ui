import { Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';

export const routes: Routes = [
    {
        path: '',
        component: ItemsComponent
    },
    {
        path: 'items/:id',
        component: ItemComponent 
    }
];
