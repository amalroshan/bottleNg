import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimBottleComponent } from './claim-bottle.component';

describe('ClaimBottleComponent', () => {
  let component: ClaimBottleComponent;
  let fixture: ComponentFixture<ClaimBottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimBottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
