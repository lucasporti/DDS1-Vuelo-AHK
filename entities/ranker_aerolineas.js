export class RankeadorDeAerolineas {
  cantidadDePersonasEn(unMes, aerolinea) {
    let cantPasajeros = 0;
    aerolinea.aviones.forEach(avion => {
      avion.vuelos.forEach(v => {
        if (v.fechaHoraPartida.slice(5, 7) === unMes) {
          cantPasajeros += v.cantPasajeros();
        }
      });
    });
    return cantPasajeros;
  }

  aerolineaConMayorCantidadDePasajerosEn(unMes, aeropuerto) {
    let aerolineaConMayorCantidadDePasajeros = null;
    let maxPasajeros = 0;

    aeropuerto.aerolineas.forEach(aerolinea => {
      let cantidadPasajeros = this.cantidadDePersonasEn(unMes, aerolinea);
      if (cantidadPasajeros > maxPasajeros) {
        maxPasajeros = cantidadPasajeros;
        aerolineaConMayorCantidadDePasajeros = aerolinea;
      }
    });

    return aerolineaConMayorCantidadDePasajeros;
  }
}