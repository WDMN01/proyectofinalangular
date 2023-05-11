import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Persona } from 'src/app/persona';
import { PersonaGetComponent } from './persona-get.component';
import { PersonaService } from 'src/app/servicios/persona.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

fdescribe('PersonaGetComponent', () => {
  let component: PersonaGetComponent;
  let fixture: ComponentFixture<PersonaGetComponent>;
  let personaService: PersonaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaGetComponent ],
      imports: [ HttpClientTestingModule, RouterModule.forRoot([]) ], 
      providers: [PersonaService],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaGetComponent);
    component = fixture.componentInstance;
    personaService = TestBed.inject(PersonaService);
  });

  it('Debería crear correctamente', () => {
    expect(component).toBeTruthy();
  });
  it('Debería obtener todas las personas del servicio', () => {
    const mockPersonas: Persona[] = [
      {
        id: 1,
        Nombre: 'Juan',
        Apellido: 'Perez',
      },
      {
        id: 2,
        Nombre: 'Maria',
        Apellido: 'Gomez',
      },
    ];

    spyOn(personaService, 'getAll').and.returnValue(of(mockPersonas));

    fixture.detectChanges();

    expect(component.personas).toEqual(mockPersonas);
  });
});
