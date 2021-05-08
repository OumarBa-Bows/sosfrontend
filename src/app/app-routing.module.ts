import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailcasesComponent } from 'src/app/details/detailcases/detailcases.component';
import { RechercheComponent } from 'src/app/recherche/recherche.component';

const routes: Routes = [
  { path: '', component: RechercheComponent },
  { path: "details/:id", component: DetailcasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
