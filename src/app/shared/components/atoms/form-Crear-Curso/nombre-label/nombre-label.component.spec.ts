import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreLabelComponent } from './nombre-label.component';

describe('NombreLabelComponent', () => {
  let component: NombreLabelComponent;
  let fixture: ComponentFixture<NombreLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NombreLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
