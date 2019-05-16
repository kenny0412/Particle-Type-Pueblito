import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedCodeComponent } from './typed-code.component';

describe('TypedCodeComponent', () => {
  let component: TypedCodeComponent;
  let fixture: ComponentFixture<TypedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
