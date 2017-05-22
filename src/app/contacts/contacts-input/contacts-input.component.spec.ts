import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsInputComponent } from './contacts-input.component';

describe('ContactsInputComponent', () => {
  let component: ContactsInputComponent;
  let fixture: ComponentFixture<ContactsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
