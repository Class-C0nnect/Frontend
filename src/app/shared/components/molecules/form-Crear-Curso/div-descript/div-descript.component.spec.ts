import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDescriptComponent } from './div-descript.component';

describe('DivDescriptComponent', () => {
  let component: DivDescriptComponent;
  let fixture: ComponentFixture<DivDescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivDescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivDescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
