import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioAnnuncioComponent } from './dettaglio-annuncio.component';

describe('DettaglioAnnuncioComponent', () => {
  let component: DettaglioAnnuncioComponent;
  let fixture: ComponentFixture<DettaglioAnnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioAnnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioAnnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
