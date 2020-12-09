
class householdAppliance {
    constructor(price,color,energyConsumption,capacity){
        this.price = price
        this.color = color
        this.energyConsumption = energyConsumption
        this.capacity = capacity
    }

    getcapacity(){
        return this.capacity
    }

    setEnergyConsumption(newEnergy){
        this.energyConsumption = newEnergy;

        return this.energyConsumption
    }

}

const fridge = new householdAppliance('200$','white','95%','4000L')
const freezer = new householdAppliance('450$','grey','50%','7000L')
const oven = new householdAppliance('350$','black','25%','50L')
const blender = new householdAppliance('50$','orange','100%','3L')
const mixer = new householdAppliance('60$','brow','100%','0L')

fridge.setEnergyConsumption('52L')
console.log(fridge)

