import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivCursoComponent } from './div-curso.component';

describe('DivCursoComponent', () => {
  let component: DivCursoComponent;
  let fixture: ComponentFixture<DivCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
