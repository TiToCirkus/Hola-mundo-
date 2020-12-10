const construccion = require('./construccion')

class casa extends construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoDelTerreno, cuartos, baños, chimenea){
            super(numPuertas, numVentanas,numPisos, direccion, altura, largo, anchoDelTerreno);
            this.cuartos = cuartos
            this.baños = baños
            this.chimenea = chimenea
        }
}

const qtaPaola = new casa(12, 25, 3, 'El junquito, KM12, Calle Esmeralda 1', '50m', '50m', '70m', 4, 3, 1);

console.log(qtaPaola.getAnchoDelTerreno())

module.exports = casa