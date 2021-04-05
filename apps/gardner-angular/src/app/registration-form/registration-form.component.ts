import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Registration from '../shared/models/registration.model';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'gardner-angular-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder
  ) {}

  public registrationForm: FormGroup;

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.required),
      lastName: this.formBuilder.control('', Validators.required),
      npiNumber: this.formBuilder.control('', Validators.required),
      phoneNumber: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      streetAddress1: this.formBuilder.control('', Validators.required),
      streetAddress2: this.formBuilder.control(''),
      city: this.formBuilder.control('', Validators.required),
      state: this.formBuilder.control('', Validators.required),
      postalCode: this.formBuilder.control('', Validators.required),
    });
  }

  onSubmit(): void {
    const registration = this.mapFormToRegistration();
    this.registrationService.addRegistration(registration);
    this.resetForm();
  }

  mapFormToRegistration(): Registration {
    return {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phoneNumber: this.phoneNumber.value,
      emailAddress: this.email.value,
      npiNumber: this.npiNumber.value,
      businessAddress: {
        streetAddress1: this.streetAddress1.value,
        streetAddress2: this.streetAddress2.value,
        city: this.city.value,
        state: this.state.value,
        postalCode: this.postalCode.value,
      },
    };
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get npiNumber() {
    return this.registrationForm.get('npiNumber');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get streetAddress1() {
    return this.registrationForm.get('streetAddress1');
  }

  get streetAddress2() {
    return this.registrationForm.get('streetAddress2');
  }

  get city() {
    return this.registrationForm.get('city');
  }

  get state() {
    return this.registrationForm.get('state');
  }

  get postalCode() {
    return this.registrationForm.get('postalCode');
  }
}
