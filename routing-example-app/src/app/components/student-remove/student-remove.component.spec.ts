import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRemoveComponent } from './student-remove.component';

describe('StudentRemoveComponent', () => {
  let component: StudentRemoveComponent;
  let fixture: ComponentFixture<StudentRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
