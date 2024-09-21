import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpaginasComponent } from './subpaginas.component';

describe('SubpaginasComponent', () => {
  let component: SubpaginasComponent;
  let fixture: ComponentFixture<SubpaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubpaginasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
