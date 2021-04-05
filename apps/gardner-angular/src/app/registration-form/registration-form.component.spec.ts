import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '../shared/services/registration.service';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let registrationService: RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      providers: [RegistrationService, FormBuilder],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    registrationService = TestBed.inject(RegistrationService);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('firstName should be valid when not empty', () => {
    const firstName = component.registrationForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();

    let errors = {};
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();

    firstName.setValue('test');

    errors = firstName.errors || {};
    expect(firstName.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('lastName should be valid when not empty', () => {
    const lastName = component.registrationForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();

    let errors = {};
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();

    lastName.setValue('test');

    errors = lastName.errors || {};
    expect(lastName.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('npiNumber should be valid when not empty', () => {
    const npiNumber = component.registrationForm.controls['npiNumber'];
    expect(npiNumber.valid).toBeFalsy();

    let errors = {};
    errors = npiNumber.errors || {};
    expect(errors['required']).toBeTruthy();

    npiNumber.setValue('test');

    errors = npiNumber.errors || {};
    expect(npiNumber.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('phoneNumber should be valid when not empty', () => {
    const phoneNumber = component.registrationForm.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();

    let errors = {};
    errors = phoneNumber.errors || {};
    expect(errors['required']).toBeTruthy();

    phoneNumber.setValue('test');

    errors = phoneNumber.errors || {};
    expect(phoneNumber.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('email should be valid when not empty and not valid email', () => {
    const email = component.registrationForm.controls['email'];
    expect(email.valid).toBeFalsy();

    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    email.setValue('test');

    errors = email.errors || {};
    expect(email.valid).toBeFalsy();
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    email.setValue('test@test.com');

    errors = email.errors || {};
    expect(email.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });

  it('streetAddress1 should be valid when not empty', () => {
    const streetAddress1 =
      component.registrationForm.controls['streetAddress1'];
    expect(streetAddress1.valid).toBeFalsy();

    let errors = {};
    errors = streetAddress1.errors || {};
    expect(errors['required']).toBeTruthy();

    streetAddress1.setValue('test');

    errors = streetAddress1.errors || {};
    expect(streetAddress1.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('streetAddress2 should always be valid', () => {
    const streetAddress2 =
      component.registrationForm.controls['streetAddress2'];
    expect(streetAddress2.valid).toBeTruthy();
  });

  it('city should be valid when not empty', () => {
    const city = component.registrationForm.controls['city'];
    expect(city.valid).toBeFalsy();

    let errors = {};
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy();

    city.setValue('test');

    errors = city.errors || {};
    expect(city.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('state should be valid when not empty', () => {
    const state = component.registrationForm.controls['state'];
    expect(state.valid).toBeFalsy();

    let errors = {};
    errors = state.errors || {};
    expect(errors['required']).toBeTruthy();

    state.setValue('test');

    errors = state.errors || {};
    expect(state.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('postalCode should be valid when not empty', () => {
    const postalCode = component.registrationForm.controls['postalCode'];
    expect(postalCode.valid).toBeFalsy();

    let errors = {};
    errors = postalCode.errors || {};
    expect(errors['required']).toBeTruthy();

    postalCode.setValue('test');

    errors = postalCode.errors || {};
    expect(postalCode.valid).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('form should be invalid unless all requirements completed', () => {
    const firstName = component.registrationForm.controls['firstName'];
    const lastName = component.registrationForm.controls['lastName'];
    const npiNumber = component.registrationForm.controls['npiNumber'];
    const phoneNumber = component.registrationForm.controls['phoneNumber'];
    const email = component.registrationForm.controls['email'];
    const streetAddress1 =
      component.registrationForm.controls['streetAddress1'];
    const city = component.registrationForm.controls['city'];
    const state = component.registrationForm.controls['state'];
    const postalCode = component.registrationForm.controls['postalCode'];

    expect(component.registrationForm.valid).toBeFalsy();

    firstName.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    lastName.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    npiNumber.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    phoneNumber.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    email.setValue('test@test.com');
    expect(component.registrationForm.valid).toBeFalsy();

    streetAddress1.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    city.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    state.setValue('test');
    expect(component.registrationForm.valid).toBeFalsy();

    postalCode.setValue('test');
    expect(component.registrationForm.valid).toBeTruthy();
  });

  it('submit button should be disabled unless form is valid', () => {
    const firstName = component.registrationForm.controls['firstName'];
    const lastName = component.registrationForm.controls['lastName'];
    const npiNumber = component.registrationForm.controls['npiNumber'];
    const phoneNumber = component.registrationForm.controls['phoneNumber'];
    const email = component.registrationForm.controls['email'];
    const streetAddress1 =
      component.registrationForm.controls['streetAddress1'];
    const city = component.registrationForm.controls['city'];
    const state = component.registrationForm.controls['state'];
    const postalCode = component.registrationForm.controls['postalCode'];
    const submitBtn = fixture.nativeElement.querySelector('.btn');

    expect(submitBtn).toBeTruthy();
    expect(submitBtn.disabled).toBeTruthy();

    firstName.setValue('test');
    lastName.setValue('test');
    npiNumber.setValue('test');
    phoneNumber.setValue('test');
    email.setValue('test@test.com');
    streetAddress1.setValue('test');
    city.setValue('test');
    state.setValue('test');
    postalCode.setValue('test');

    fixture.detectChanges();
    expect(component.registrationForm.valid).toBeTruthy();
    expect(submitBtn.disabled).toBeFalsy();
  });

  it('can register a client', () => {
    spyOn(registrationService, 'addRegistration');
    component.onSubmit();
    expect(registrationService.addRegistration).toHaveBeenCalled();
  });

  it('should submit when submit clicked', () => {
    spyOn(registrationService, 'addRegistration');
    const firstName = component.registrationForm.controls['firstName'];
    const lastName = component.registrationForm.controls['lastName'];
    const npiNumber = component.registrationForm.controls['npiNumber'];
    const phoneNumber = component.registrationForm.controls['phoneNumber'];
    const email = component.registrationForm.controls['email'];
    const streetAddress1 =
      component.registrationForm.controls['streetAddress1'];
    const city = component.registrationForm.controls['city'];
    const state = component.registrationForm.controls['state'];
    const postalCode = component.registrationForm.controls['postalCode'];
    const submitBtn = fixture.nativeElement.querySelector('.btn');

    firstName.setValue('test');
    lastName.setValue('test');
    npiNumber.setValue('test');
    phoneNumber.setValue('test');
    email.setValue('test@test.com');
    streetAddress1.setValue('test');
    city.setValue('test');
    state.setValue('test');
    postalCode.setValue('test');

    fixture.detectChanges();
    expect(component.registrationForm.valid).toBeTruthy();
    expect(submitBtn.disabled).toBeFalsy();

    submitBtn.click();
    expect(registrationService.addRegistration).toHaveBeenCalled();
  });
});
