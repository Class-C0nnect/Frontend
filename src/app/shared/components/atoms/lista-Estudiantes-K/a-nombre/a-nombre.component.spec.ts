import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANombreComponent } from './a-nombre.component';

describe('ANombreComponent', () => {
  let component: ANombreComponent;
  let fixture: ComponentFixture<ANombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ANombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ANombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
