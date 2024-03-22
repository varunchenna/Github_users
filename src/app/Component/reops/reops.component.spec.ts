import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopsComponent } from './reops.component';

describe('ReopsComponent', () => {
  let component: ReopsComponent;
  let fixture: ComponentFixture<ReopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReopsComponent]
    });
    fixture = TestBed.createComponent(ReopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
