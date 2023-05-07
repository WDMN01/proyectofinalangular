import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaGetComponent } from './persona-get.component';

describe('PersonaGetComponent', () => {
  let component: PersonaGetComponent;
  let fixture: ComponentFixture<PersonaGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
