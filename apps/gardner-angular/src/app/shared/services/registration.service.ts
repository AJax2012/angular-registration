import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Registration from '../models/registration.model';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  currentlyRegistered;

  constructor() {
    this.currentlyRegistered = [];
  }

  addRegistration(registration: Registration) {
    registration.id = uuidv4();
    this.currentlyRegistered.push(registration);
  }

  getCurrentlyRegistered(): Registration[] {
    return this.currentlyRegistered;
  }
}
