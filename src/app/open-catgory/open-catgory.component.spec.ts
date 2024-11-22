import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCatgoryComponent } from './open-catgory.component';

describe('OpenCatgoryComponent', () => {
  let component: OpenCatgoryComponent;
  let fixture: ComponentFixture<OpenCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCatgoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
