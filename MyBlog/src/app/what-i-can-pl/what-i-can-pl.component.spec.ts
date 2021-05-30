import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatICanPlComponent } from './what-i-can-pl.component';

describe('WhatICanPlComponent', () => {
  let component: WhatICanPlComponent;
  let fixture: ComponentFixture<WhatICanPlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatICanPlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatICanPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
