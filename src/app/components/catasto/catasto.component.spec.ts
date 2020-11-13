import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicCompomponentComponent } from './catasto.component';

describe('DynamicCompomponentComponent', () => {
  let component: DynamicCompomponentComponent;
  let fixture: ComponentFixture<DynamicCompomponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
