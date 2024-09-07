import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFormCrearCursoComponent } from './btn-form-crear-curso.component';

describe('BtnFormCrearCursoComponent', () => {
  let component: BtnFormCrearCursoComponent;
  let fixture: ComponentFixture<BtnFormCrearCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnFormCrearCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnFormCrearCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
