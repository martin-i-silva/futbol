
const api = new API();

// const campeonatoArg = document.getElementById('campeonato-arg')
var liga = document.querySelectorAll("#ligas button");

// api.mostrarTabla(campeonatoArg.value)

for(var i=0;i<liga.length;i++){
    
    let ligaValue = liga[i].value

    liga[i].addEventListener('click', () => {
        api.mostrarTabla(ligaValue)
        })
} 

for(var i=0;i<liga.length;i++){
    
    let ligaValue = liga[i].value

    liga[i].addEventListener('click', () => {
        api.mostrarPartidos(ligaValue)
        })
} 