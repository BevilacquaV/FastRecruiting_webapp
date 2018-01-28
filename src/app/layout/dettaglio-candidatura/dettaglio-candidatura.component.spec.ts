import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCandidaturaComponent } from './dettaglio-candidatura.component';

describe('DettaglioCandidaturaComponent', () => {
  let component: DettaglioCandidaturaComponent;
  let fixture: ComponentFixture<DettaglioCandidaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioCandidaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioCandidaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
