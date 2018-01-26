import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatiDaVerificareComponent } from './candidati-da-verificare.component';

describe('CandidatiDaVerificareComponent', () => {
  let component: CandidatiDaVerificareComponent;
  let fixture: ComponentFixture<CandidatiDaVerificareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatiDaVerificareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatiDaVerificareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
