import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiNonIdoneiComponent } from './candidati-non-idonei.component';

describe('CandidatiNonIdoneiComponent', () => {
  let component: CandidatiNonIdoneiComponent;
  let fixture: ComponentFixture<CandidatiNonIdoneiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatiNonIdoneiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiNonIdoneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
