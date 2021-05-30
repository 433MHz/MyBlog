import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePlComponent } from './about-me-pl.component';

describe('AboutMePlComponent', () => {
  let component: AboutMePlComponent;
  let fixture: ComponentFixture<AboutMePlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
