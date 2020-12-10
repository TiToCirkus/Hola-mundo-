const largometraje = require('./largometraje')

class documentary extends largometraje {
    constructor(duration, direct, animated, title, storyteller){
        super(duration, direct, animated, title)
        this.storyteller = storyteller
    }

    getStoryTeller(){
        const mesage = `El narrador es ${this.storyteller}`
    }
}

module.exports = documentary