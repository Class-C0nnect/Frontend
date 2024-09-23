import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialProfesorComponent } from './speed-dial-profesor.component';

describe('SpeedDialProfesorComponent', () => {
  let component: SpeedDialProfesorComponent;
  let fixture: ComponentFixture<SpeedDialProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedDialProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeedDialProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
