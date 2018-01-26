import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificaColloquioComponent } from './pianifica-colloquio.component';

describe('PianificaColloquioComponent', () => {
  let component: PianificaColloquioComponent;
  let fixture: ComponentFixture<PianificaColloquioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianificaColloquioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianificaColloquioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
