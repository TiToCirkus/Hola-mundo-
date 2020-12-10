const casa = require('./casa')
const edificio = require('./edificio')

class Contruccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoDelTerreno){
            this.numPuertas = numPuertas
            this.numVentanas = numVentanas
            this.numPisos = numPisos
            this.direccion = direccion
            this.altura = altura
            this.largo = largo
            this.anchoDelTerreno = anchoDelTerreno
        }

        getAnchoDelTerreno(){
            const mensaje = `Los metros cuadrados de esta propiedad son ${this.anchoDelTerreno}`;
            return mensaje
        }

        getDireccion(){
            const newmensaje = `Esta propiedad se encuentra ubicada en ${this.direccion}`;
            return newmensaje
        }

        modDireccion(newDireccion){
            this.direccion = newDireccion
        }
}

const qtaPaola = new edificio(12, 25, 3, 'El junquito, KM12, Calle Esmeralda 1', '50m', '50m', '70m', 4, 3, 1);

console.log(qtaPaola.getAnchoDelTerreno())


module.exports = Contruccion