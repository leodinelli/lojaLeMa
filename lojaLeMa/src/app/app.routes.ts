import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';
export const routes: Routes = [
    {path:"detalhe", component:DetalheComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent}
];
