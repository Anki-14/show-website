import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprnCatgoryComponent } from './oprn-catgory.component';

describe('OprnCatgoryComponent', () => {
  let component: OprnCatgoryComponent;
  let fixture: ComponentFixture<OprnCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OprnCatgoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OprnCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
