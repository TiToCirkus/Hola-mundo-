const contruccion = require('./construccion')

class edificio extends contruccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, anchoDelTerreno, numAptos, numSalidasEmergencia, numExtintores){
            super(numPuertas, numVentanas,numPisos, direccion, altura, largo, anchoDelTerreno)
            this.numAptos = numAptos
            this.numSalidasEmergencia = numSalidasEmergencia
            this.numExtintores = numExtintores
        }
}

const alejandria = new edificio(8,16,8, 'mosquera', '80m', '40m', '50m', 25, 1, 25)

alejandria.modDireccion('caracas')
console.log(alejandria)

module.exports = edificio