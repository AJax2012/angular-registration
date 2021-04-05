import { Component, OnInit } from '@angular/core';
import Registration from '../shared/models/registration.model';
import { RegistrationService } from '../shared/services/registration.service';

@Component({
  selector: 'gardner-angular-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.scss'],
})
export class RegisteredListComponent implements OnInit {
  headElements;
  clients: Registration[];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.headElements = [
      'First',
      'Last',
      'NPI Number',
      'Email',
      'Phone',
      'City',
      'State',
    ];
    this.getClients();
  }

  getClients() {
    this.clients = this.registrationService.getCurrentlyRegistered();
  }
}
