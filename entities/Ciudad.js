export class Ciudad{
  nombre;
  aeropuertos = [];

  constructor(nombre){
    this.nombre = nombre;
  }

  agregarAeropuerto(aeropuerto){
    this.aeropuertos.push(aeropuerto);
  }

  cantAeropuertos(){
    return this.aeropuertos.length;
  }
  
  cantPasajerosQueLlegaronEl(dia){
    let cantPasajeros = 0;

    this.aeropuertos.forEach(a => {
      a.vuelosQueLlegaronHastaAquiElDia(dia).forEach(v => {
        cantPasajeros += v.cantPasajeros();
      })
    });
    return cantPasajeros;
  }

  tenesAeropuerto(unAeropuerto){
    return this.aeropuertos.includes(unAeropuerto);
  }
}