import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilmeldingComponent } from './tilmelding.component';

describe('TilmeldingComponent', () => {
  let component: TilmeldingComponent;
  let fixture: ComponentFixture<TilmeldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilmeldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilmeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
