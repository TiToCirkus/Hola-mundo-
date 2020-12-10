class animal {
    constructor(legs, eyes, vertebrate, skin){
        this.legs = legs
        this.eyes = eyes
        this.vertebrate = vertebrate
        this.skin = skin
    }

    sleep(){
        return 'ZZzZZzZz'
    }

    eat(){
        return 'Estoy comiendo'
    }

    breed(){
        return 'Me estoy reproduciendo'
    }
}

class spider extends animal {
    constructor(legs, eyes, vertebrate, skin, type) {
        super(legs, eyes, vertebrate, skin);
        this.type = type 
    }

    tejer(){
        return 'Estoy tejiendo'
    }
}

const spiderblack = new spider(8, 32, true, 'peluda', 'tarantula');

console.log(spiderblack.sleep())