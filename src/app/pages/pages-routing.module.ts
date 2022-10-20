import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedComponent } from './approved/approved.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ConectionComponent } from './conection/conection.component';
import { DeniedComponent } from './denied/denied.component';
import { DownloadComponent } from './download/download.component';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';
import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { MinhaHortaComponent } from './minha-horta/minha-horta.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'imovel-form', component: ImovelFormComponent },
  { path: 'approved', component: ApprovedComponent },
  { path: 'denied', component: DeniedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'minha-horta', component: MinhaHortaComponent },
  { path: 'conection', component: ConectionComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'download', component: DownloadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
