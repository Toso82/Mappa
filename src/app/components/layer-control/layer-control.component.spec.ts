import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialZoomComponent } from './material-zoom.component';

describe('MaterialZoomComponent', () => {
  let component: MaterialZoomComponent;
  let fixture: ComponentFixture<MaterialZoomComponent>;

  beforeEach(async(() => {
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
