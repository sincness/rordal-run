import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ForsideComponent } from './pages/forside/forside.component';
import { DistancerComponent } from './pages/distancer/distancer.component';
import { TilmeldingComponent } from './pages/tilmelding/tilmelding.component';
import { TakComponent } from './pages/tak/tak.component';
import { DeltagerlisteComponent } from './pages/deltagerliste/deltagerliste.component';
import { FejlComponent } from './pages/fejl/fejl.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ForsideComponent,
    DistancerComponent,
    TilmeldingComponent,
    TakComponent,
    DeltagerlisteComponent,
    FejlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
