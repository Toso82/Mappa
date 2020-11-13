import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialZoomComponent } from './material-zoom.component';

describe('MaterialZoomComponent', () => {
  let component: MaterialZoomComponent;
  let fixture: ComponentFixture<MaterialZoomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
