import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationService } from '../shared/services/registration.service';

import { RegisteredListComponent } from './registered-list.component';

describe('RegisteredListComponent', () => {
  let component: RegisteredListComponent;
  let fixture: ComponentFixture<RegisteredListComponent>;
  let registrationService: RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredListComponent],
      providers: [RegistrationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    registrationService = TestBed.inject(RegistrationService);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users on init', () => {
    spyOn(registrationService, 'getCurrentlyRegistered');
    component.ngOnInit();
    expect(registrationService.getCurrentlyRegistered).toHaveBeenCalled();
  });

  it('should populate headElements on init', () => {
    expect(component.headElements).not.toBeNull();
  });
});
