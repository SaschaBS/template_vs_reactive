import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HobbyFormReactiveComponent} from './hobby-form-reactive.component';

describe('HobbyFormReactiveComponent', () => {
  let component: HobbyFormReactiveComponent;
  let fixture: ComponentFixture<HobbyFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyFormReactiveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
