import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgbModule, NgbNavModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gardner-angular'`, () => {
    expect(app.title).toEqual('gardner-angular');
  });

  it('should have as activeId as 1', () => {
    expect(app.activeId).toEqual(1);
  });
});
