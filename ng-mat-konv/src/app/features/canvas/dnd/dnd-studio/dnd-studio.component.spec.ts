import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndStudioComponent } from './dnd-studio.component';

describe('DndStudioComponent', () => {
  let component: DndStudioComponent;
  let fixture: ComponentFixture<DndStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DndStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DndStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
