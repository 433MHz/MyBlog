import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatICanComponent } from './what-ican.component';

describe('WhatICanComponent', () => {
  let component: WhatICanComponent;
  let fixture: ComponentFixture<WhatICanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatICanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatICanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
