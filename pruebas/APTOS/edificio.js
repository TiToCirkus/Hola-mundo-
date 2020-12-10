const contruccion = require('./construccion')

class edificio extends contruccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoDelTerreno, numAptos, numSalidasEmergencia, numExtintores){
            super(numPuertas, numVentanas,numPisos, direccion, altura, largo, anchoDelTerreno)
            this.numAptos = numAptos
            this.numSalidasEmergencia = numSalidasEmergencia
            this.numExtintores = numExtintores
        }
}

module.exports = edificio