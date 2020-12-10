const construccion = require('./construccion')

class casa extends construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoDelTerreno, cuartos, baños, chimenea){
            super(numPuertas, numVentanas,numPisos, direccion, altura, largo, anchoDelTerreno);
            this.cuartos = cuartos
            this.baños = baños
            this.chimenea = chimenea
        }
}

module.exports = casa