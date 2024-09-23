import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialAdministradorComponent } from './speed-dial-administrador.component';

describe('SpeedDialAdministradorComponent', () => {
  let component: SpeedDialAdministradorComponent;
  let fixture: ComponentFixture<SpeedDialAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedDialAdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeedDialAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
