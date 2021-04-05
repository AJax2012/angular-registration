import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationService } from './shared/services/registration.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredListComponent } from './registered-list/registered-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegisteredListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
