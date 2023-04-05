import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallPersonComponent } from './viewall-person.component';

describe('ViewallPersonComponent', () => {
  let component: ViewallPersonComponent;
  let fixture: ComponentFixture<ViewallPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
