import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPurchaseComponent } from './verify-purchase.component';

describe('VerifyPurchaseComponent', () => {
  let component: VerifyPurchaseComponent;
  let fixture: ComponentFixture<VerifyPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
