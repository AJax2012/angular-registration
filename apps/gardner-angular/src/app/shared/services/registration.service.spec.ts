import { TestBed } from '@angular/core/testing';
import Registration from '../models/registration.model';
import { RegistrationService } from './registration.service';

const mockRegistration: Registration = {
  firstName: 'test',
  lastName: 'test',
  phoneNumber: '5551231234',
  emailAddress: 'test@test.com',
  businessAddress: {
    streetAddress1: 'test',
    city: 'test',
    state: 'test',
    postalCode: 'test',
  },
};

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = new RegistrationService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have an empty array on init', () => {
    expect(service.currentlyRegistered).toEqual([]);
  });

  it('should add to currentlyRegistered when addRegistration called', () => {
    expect(service.currentlyRegistered).toEqual([]);
    service.addRegistration(mockRegistration);
    expect(service.currentlyRegistered).not.toEqual([]);

    expect(service.currentlyRegistered[0].id).not.toBeNull();
    expect(service.currentlyRegistered[0].firstName).toEqual('test');
    expect(service.currentlyRegistered[0].lastName).toEqual('test');
    expect(service.currentlyRegistered[0].phoneNumber).toEqual('5551231234');
    expect(service.currentlyRegistered[0].emailAddress).toEqual(
      'test@test.com'
    );
    expect(
      service.currentlyRegistered[0].businessAddress.streetAddress1
    ).toEqual('test');
    expect(service.currentlyRegistered[0].businessAddress.city).toEqual('test');
    expect(service.currentlyRegistered[0].businessAddress.state).toEqual(
      'test'
    );
    expect(service.currentlyRegistered[0].businessAddress.postalCode).toEqual(
      'test'
    );
  });
});
