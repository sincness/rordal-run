import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForsideComponent } from './pages/forside/forside.component';
import { DistancerComponent } from './pages/distancer/distancer.component';
import { TilmeldingComponent } from './pages/tilmelding/tilmelding.component';
import { TakComponent } from './pages/tak/tak.component';
import { DeltagerlisteComponent } from './pages/deltagerliste/deltagerliste.component';
import { FejlComponent } from './pages/fejl/fejl.component';
import { OmComponent } from './pages/om/om.component';
import { BuyGuard } from './guards/buy.guard';


const routes: Routes = [
  { path: '', redirectTo: '/forside', pathMatch: 'full' },
  { path: 'forside', component: ForsideComponent },
  { path: 'distancer', component: DistancerComponent },
  { path: 'tilmelding', component: TilmeldingComponent },
  { path: 'tilmelding/tak', component: TakComponent, canActivate: [BuyGuard] },
  { path: 'tilmelding/:id', component: TilmeldingComponent },
  { path: 'om', component: OmComponent },
  { path: 'deltagerliste', component: DeltagerlisteComponent },
  { path: '**', component: FejlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
