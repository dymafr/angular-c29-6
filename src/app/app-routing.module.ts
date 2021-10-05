import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { DataUserGuard } from './shared/guards/data-user.guard';
import { ConnexionComponent } from './views/connexion/connexion.component';
import { HomeComponent } from './views/home/home.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ProfilComponent } from './views/profil/profil.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [DataUserGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'connexion',

        component: ConnexionComponent,
      },
      {
        path: 'inscription',

        component: InscriptionComponent,
      },
      {
        path: 'profil',
        canActivate: [AuthGuard],
        component: ProfilComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
