const numberButtons = document.getElementsByName("data-number")
const operaButtons = document.getElementsByName("data-opera")
const deleteButton = document.getElementById("data-delete")
const equalsButton = document.getElementById("data-igual")
let result = document.getElementById("result")
let opeact = '';
let opeprev = '';
let operation = undefined

numberButtons.forEach(function(boton){
    boton.addEventListener('click', function(){
        addnumber(boton.innerText)
    })
})

operaButtons.forEach(function(boton){
    boton.addEventListener('click', function(){
        addopera(boton.innerText)
    })
})

deleteButton.addEventListener('click', function(){
    clear()
    updatedisplay()
})

equalsButton.addEventListener('click', function(){
    calculate()
    updatedisplay()
})

function addopera(op){
    if (opeact === '') return;
    if (opeprev !== ''){
        calculate()
    }
    operation = op.toString();
    opeprev = opeact;
    opeact = '';
}

function calculate(){
    let calculo;
    const anterior = parseFloat(opeprev)
    const actual = parseFloat(opeact)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;           
    }
    opeact = calculo;
    operation = undefined;
    opeprev = '';
}

function addnumber(num){
    opeact = opeact.toString() + num.toString();
    updatedisplay();
}

function clear(){
    opeact = '';
    opeprev = '';
    operation = undefined
}


function updatedisplay(){
    result.value = opeact;
}

clear()


