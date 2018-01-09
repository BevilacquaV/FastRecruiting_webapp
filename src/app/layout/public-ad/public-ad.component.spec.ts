import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAdComponent } from './public-ad.component';

describe('PublicAdComponent', () => {
  let component: PublicAdComponent;
  let fixture: ComponentFixture<PublicAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
