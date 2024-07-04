import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonvaSidebarComponent } from './konva-sidebar.component';

describe('KonvaSidebarComponent', () => {
  let component: KonvaSidebarComponent;
  let fixture: ComponentFixture<KonvaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonvaSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonvaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
