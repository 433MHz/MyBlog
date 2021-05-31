import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBoxesComponent } from './technology-boxes.component';

describe('TechnologyBoxesComponent', () => {
  let component: TechnologyBoxesComponent;
  let fixture: ComponentFixture<TechnologyBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
