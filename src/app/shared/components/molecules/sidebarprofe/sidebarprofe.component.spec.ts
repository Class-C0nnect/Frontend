import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarprofeComponent } from './sidebarprofe.component';

describe('SidebarprofeComponent', () => {
  let component: SidebarprofeComponent;
  let fixture: ComponentFixture<SidebarprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarprofeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
