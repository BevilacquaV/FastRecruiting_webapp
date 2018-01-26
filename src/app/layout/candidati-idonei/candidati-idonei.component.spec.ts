import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiIdoneiComponent } from './candidati-idonei.component';

describe('CandidatiIdoneiComponent', () => {
  let component: CandidatiIdoneiComponent;
  let fixture: ComponentFixture<CandidatiIdoneiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatiIdoneiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiIdoneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
