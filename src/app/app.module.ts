import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AllcasesComponent } from './allcases/allcases.component';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RechercheComponent } from './recherche/recherche.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailcasesComponent } from './details/detailcases/detailcases.component';
import { EditcomportementaleComponent } from './comportementale/editcomportementale/editcomportementale.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DetailsComportementaleComponent } from './comportementale/details-comportementale/details-comportementale.component';
import { FormComponent } from './form/form.component';
import { EditBiomedicaleComponent } from './biomedicale/edit-biomedicale/edit-biomedicale.component';
import { EditStructureComponent } from './structure/edit-structure/edit-structure.component';
import { EditIdentificationComponent } from './identification/edit-identification/edit-identification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsBiomedicaleComponent } from './biomedicale/details-biomedicale/details-biomedicale.component';
import { DetailsStructureComponent } from './structure/details-structure/details-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllcasesComponent,
    RechercheComponent,
    DetailcasesComponent,
    EditcomportementaleComponent,
    DetailsComportementaleComponent,
    FormComponent,
    EditBiomedicaleComponent,
    EditStructureComponent,
    EditIdentificationComponent,
    DetailsBiomedicaleComponent,
    DetailsStructureComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatDialogModule,
    MatToolbarModule,

  ],
  providers: [LevelserviceService],
  bootstrap: [AppComponent],
  entryComponents: [
    EditcomportementaleComponent,
    DetailsComportementaleComponent,
    EditBiomedicaleComponent,
    EditStructureComponent,
    EditIdentificationComponent
  ]
})
export class AppModule { }
