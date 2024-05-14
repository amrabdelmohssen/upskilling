import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarCardComponent } from './components/shared/car-card/car-card.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { AllVehiclesComponent } from './components/features/all-vehicles/all-vehicles.component';
import { CarDetailsComponent } from './components/features/car-details/car-details.component';
import { LandingPageComponent } from './components/features/landing-page/landing-page.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
  
    NavComponent,
    CarCardComponent,
    FooterComponent,
    PaginationComponent,
    AllVehiclesComponent,
    CarDetailsComponent,
    LandingPageComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
