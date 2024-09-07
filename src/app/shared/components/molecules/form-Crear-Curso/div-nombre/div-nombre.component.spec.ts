import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivNombreComponent } from './div-nombre.component';

describe('DivNombreComponent', () => {
  let component: DivNombreComponent;
  let fixture: ComponentFixture<DivNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivNombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
