const largometraje = require('./largometraje')

class Film extends largometraje {
    constructor(duration, direct, animated, title, actors){
        super(duration, direct, animated, title)
        this.actors = actors
    }

    getactors(){

        let actors = 'los actores son:'

        for( let i = 0; i < this.actors.length; i++){
            actors = `${actors} ${this.actors[i]},`
        }

        return  actors;
    }
}

module.exports = Film