export class Aeropuerto {
  nombre;
  vuelos = [];
  escalas = [];

  constructor(nombre){
    this.nombre = nombre;
  }

  agregarEscala(unaEscala) {
    this.escalas.push(unaEscala);
  }

  agregarVuelo(vuelo) {
    this.vuelos.push(vuelo);
  }

  vuelosQuePartieronDeMi() {
    return this.vuelos.filter(v => v.partisteDe(this));
  }

  vuelosQueLlegaronHastaAqui() {
    return this.vuelos.filter(v => v.llegasteA(this));
  }

  vuelosQueLlegaronHastaAquiElDia(dia) {
    return this.vuelosQueLlegaronHastaAqui().filter(v => v.llegasteEnFecha(dia));
  }

  cantVuelosQuePartieron(fecha) {
    const vuelosDeLaFecha = this.vuelosQuePartieronDeMi().filter(v => v.salisteEnFecha(fecha));
    return vuelosDeLaFecha.length;
  }

  cantVuelosQueLlegaron(fecha) {
    return this.vuelosQueLlegaronHastaAquiElDia(fecha).length;
  }
  
  cantEscalas() {
    return this.escalas.length;
  }
}