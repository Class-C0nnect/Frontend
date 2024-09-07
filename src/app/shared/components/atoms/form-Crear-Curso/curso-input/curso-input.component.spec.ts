import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInputComponent } from './curso-input.component';

describe('CursoInputComponent', () => {
  let component: CursoInputComponent;
  let fixture: ComponentFixture<CursoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
