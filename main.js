const form = document.getElementById('form-comparar')


form.addEventListener('submit', function(e){

    e.preventDefault();

    const inputNumberA = document.getElementById('number-A')
    const inputNumberB = document.getElementById('number-B')


    if(inputNumberA.value < inputNumberB.value){
        alert(`sucesso`)
    }

    else{
        alert(`fracasso`)
    }
    





});