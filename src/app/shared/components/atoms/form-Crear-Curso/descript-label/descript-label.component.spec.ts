import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptLabelComponent } from './descript-label.component';

describe('DescriptLabelComponent', () => {
  let component: DescriptLabelComponent;
  let fixture: ComponentFixture<DescriptLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
