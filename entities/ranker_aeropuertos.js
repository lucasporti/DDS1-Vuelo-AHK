export class RankeadorDeAeropuertos {

  aeropuertoConMenorCantDeEscalas(aeropuertos) {
    let aeropuertoConMenorEscalas;
    let cantMenorEscalas = 99999999;

    aeropuertos.forEach(a => {
      if (a.cantEscalas() < cantMenorEscalas) {
        cantMenorEscalas = a.cantEscalas();
        aeropuertoConMenorEscalas = a;
      }
    });

    return aeropuertoConMenorEscalas;
  }
}