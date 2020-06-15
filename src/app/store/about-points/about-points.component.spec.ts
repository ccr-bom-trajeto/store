import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPointsComponent } from './about-points.component';

describe('AboutPointsComponent', () => {
  let component: AboutPointsComponent;
  let fixture: ComponentFixture<AboutPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
