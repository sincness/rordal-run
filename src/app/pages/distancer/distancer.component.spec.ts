import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancerComponent } from './distancer.component';

describe('DistancerComponent', () => {
  let component: DistancerComponent;
  let fixture: ComponentFixture<DistancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
