import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearCursoTemplateComponent } from './form-crear-curso-template.component';

describe('FormCrearCursoTemplateComponent', () => {
  let component: FormCrearCursoTemplateComponent;
  let fixture: ComponentFixture<FormCrearCursoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCrearCursoTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCrearCursoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
