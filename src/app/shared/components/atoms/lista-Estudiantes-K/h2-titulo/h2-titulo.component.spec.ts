import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2TituloComponent } from './h2-titulo.component';

describe('H2TituloComponent', () => {
  let component: H2TituloComponent;
  let fixture: ComponentFixture<H2TituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H2TituloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H2TituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
