import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePlComponent } from './contact-me-pl.component';

describe('ContactMePlComponent', () => {
  let component: ContactMePlComponent;
  let fixture: ComponentFixture<ContactMePlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMePlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
