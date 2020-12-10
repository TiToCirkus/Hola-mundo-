const Film = require('./film')
const documentary = require('./documentary')

class cine {
    constructor(sala, largometraje){
        this.sala = sala
        this.largometraje = largometraje
    }

    reproducirLargometraje(){
        const mensaje = `El largometraje ${this.largometraje.title} se esta presentando en la sala ${this.sala}`;

        return mensaje 
    }
}


const IronMan = new Film(120, 'Jon Favreau', false, 'Iron Man', ['rober downey', 'terrence howard', 'jeff bridges']);

const cineteca = new cine(5, IronMan)

console.log(cineteca.reproducirLargometraje())
