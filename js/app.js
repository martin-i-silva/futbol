
const api = new API();

// const campeonatoArg = document.getElementById('campeonato-arg')
var liga = document.querySelectorAll("#ligas button");

// api.mostrarTabla(campeonatoArg.value)

for(var i=0;i<liga.length;i++){
    
    let ligaValue = liga[i].value

    liga[i].addEventListener('click', () => {
        if(document.querySelector('#tabla-body')){document.querySelector('#tabla-body').remove()}
        api.estadoSpinner('block');
        setTimeout(()=>{
            //insertar el resultado
            api.mostrarTabla(ligaValue)
            api.estadoSpinner('none');
        }, 2000)
        
        })
} 

for(var i=0;i<liga.length;i++){
    
    let ligaValue = liga[i].value

    liga[i].addEventListener('click', () => {
        if(document.querySelector('#resultado-div')){document.querySelector('#resultado-div').remove()}
        api.mostrarPartidos(ligaValue)
        })
} 




        
        