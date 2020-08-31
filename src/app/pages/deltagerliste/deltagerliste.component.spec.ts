import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltagerlisteComponent } from './deltagerliste.component';

describe('DeltagerlisteComponent', () => {
  let component: DeltagerlisteComponent;
  let fixture: ComponentFixture<DeltagerlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltagerlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltagerlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
