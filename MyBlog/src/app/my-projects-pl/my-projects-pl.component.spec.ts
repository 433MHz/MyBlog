import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsPlComponent } from './my-projects-pl.component';

describe('MyProjectsPlComponent', () => {
  let component: MyProjectsPlComponent;
  let fixture: ComponentFixture<MyProjectsPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectsPlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
