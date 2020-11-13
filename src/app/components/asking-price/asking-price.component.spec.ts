import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AskingPriceComponent } from './asking-price.component';

describe('AskingPriceComponent', () => {
  let component: AskingPriceComponent;
  let fixture: ComponentFixture<AskingPriceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AskingPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
