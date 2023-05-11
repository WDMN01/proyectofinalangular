import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

fdescribe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('Debería crear correctamente', () => {
    expect(service).toBeTruthy();
  });
  it('Debería devolver verdadero para credenciales válidas', () => {
    const credentials = {
      usuario: 'David',
      password: '12345'
    };
    expect(service.ingresarAplicativo(credentials)).toBeTrue();
  });
  it('Debería devolver falso para credenciales inválidas', () => {
    const credentials = {
      usuario: 'Juan',
      password: '54321'
    };
    expect(service.ingresarAplicativo(credentials)).toBeFalse();
  });
});
