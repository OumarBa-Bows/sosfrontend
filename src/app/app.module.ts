import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AllcasesComponent } from './allcases/allcases.component';
import {LevelserviceService} from 'src/app/services/levelservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RechercheComponent } from './recherche/recherche.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllcasesComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [LevelserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
