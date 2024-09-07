import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoLabelComponent } from './curso-label.component';

describe('CursoLabelComponent', () => {
  let component: CursoLabelComponent;
  let fixture: ComponentFixture<CursoLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
