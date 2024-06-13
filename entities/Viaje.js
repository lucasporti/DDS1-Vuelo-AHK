export class Viaje {
  vuelos = [];
  escalas = [];

  agregarVuelo(vuelo) {
    this.vuelos.push(vuelo);
  }

  agregarEscala(escala) {
    this.escalas.push(escala);
  }

  duracionTotalEscalas() {
    let duracionTotal = 0;

    this.escalas.forEach((unaEscala) => {
      duracionTotal += unaEscala.duracionAproxEnMins; // Corregir nombre de la propiedad
    });

    return duracionTotal;
  }

  duracionTotalVuelos() {
    let duracionTotal = 0;

    for (let z = 0; z < this.vuelos.length; z++) {
      duracionTotal += this.vuelos[z].duracionAproxEnMins;
    }
    return duracionTotal;
  }

  duracionTotalAproxEnMins() {
    return this.duracionTotalVuelos() + this.duracionTotalEscalas();
  }
}