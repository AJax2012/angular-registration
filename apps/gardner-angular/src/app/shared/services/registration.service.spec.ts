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
    expect(service.currentlyRegistered).toEqual([mockRegistration]);
  });

  it('should get currentlyRegistered when getCurrentlyRegistered called', () => {
    service.currentlyRegistered = mockRegistration;
    const result = service.getCurrentlyRegistered();
    expect(result).toEqual(mockRegistration);
  });
});
