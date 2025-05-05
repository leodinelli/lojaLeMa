import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {path:"detalhe", component:DetalheComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"login", component:LoginComponent},
    {path:"", component:LoginComponent}

];
