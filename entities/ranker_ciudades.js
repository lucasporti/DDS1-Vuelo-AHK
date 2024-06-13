export class RankerDeCiudades {

  ciudadQueMasPasajerosRecibioEl(dia, ciudades) {
    let ciudadConMasPasajeros;
    let cantPasajeros = -999999;

    ciudades.forEach(c => {
      if (c.cantPasajerosQueLlegaronEl(dia) > cantPasajeros) {
        cantPasajeros = c.cantPasajerosQueLlegaronEl(dia);
        ciudadConMasPasajeros = c;
      }
    });

    return ciudadConMasPasajeros;
  }
}