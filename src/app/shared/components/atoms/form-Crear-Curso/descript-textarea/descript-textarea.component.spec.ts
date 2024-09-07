import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptTextareaComponent } from './descript-textarea.component';

describe('DescriptTextareaComponent', () => {
  let component: DescriptTextareaComponent;
  let fixture: ComponentFixture<DescriptTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
