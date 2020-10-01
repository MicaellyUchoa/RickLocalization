import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonageItemComponent } from './personage-item.component';

describe('PersonageItemComponent', () => {
  let component: PersonageItemComponent;
  let fixture: ComponentFixture<PersonageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
