import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmapComponent } from './ourmap.component';

describe('OurmapComponent', () => {
  let component: OurmapComponent;
  let fixture: ComponentFixture<OurmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
