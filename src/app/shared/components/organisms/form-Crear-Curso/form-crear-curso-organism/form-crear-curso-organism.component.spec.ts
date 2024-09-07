import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearCursoOrganismComponent } from './form-crear-curso-organism.component';

describe('FormCrearCursoOrganismComponent', () => {
  let component: FormCrearCursoOrganismComponent;
  let fixture: ComponentFixture<FormCrearCursoOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCrearCursoOrganismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCrearCursoOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
