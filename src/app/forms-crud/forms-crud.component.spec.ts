import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCrudComponent } from './forms-crud.component';

describe('FormsCrudComponent', () => {
  let component: FormsCrudComponent;
  let fixture: ComponentFixture<FormsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
