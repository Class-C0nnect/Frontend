import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreInputComponent } from './nombre-input.component';

describe('NombreInputComponent', () => {
  let component: NombreInputComponent;
  let fixture: ComponentFixture<NombreInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NombreInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
