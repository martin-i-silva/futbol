class API{
    constructor(){
        this.apikey = 'ff3dcbf972e4186695d12a6e52de4687b39d626c8b9baab46894b8d00458f57f';
        this.init();
    }

    init(){
        this.mostrarTabla(document.getElementById('campeonato-arg').value)
    };


    async obtenerTabla(leagueID){
        this.leagueID = leagueID
        const url = `https://allsportsapi.com/api/football/?&met=Standings&leagueId=${this.leagueID}&timezone=America/Argentina/Buenos_Aires&APIkey=${this.apikey}`;
    
        // fetch a la api
        const tablaLiga = await fetch(url);

        // respuesta en json
        const tabla = await tablaLiga.json();
        //console.log(tabla);
        return {tabla};
    }
    mostrarTabla(torneoID){
       
        const torneoId = torneoID;
            
        this.obtenerTabla(torneoId)
        .then((tabla)=>{
        let tablaTotal = tabla.tabla.result.total
        
    
        const tbody = document.createElement('tbody');
        tbody.setAttribute('id', "tabla-body")
        document.getElementById('tabla').appendChild(tbody)
    
            tablaTotal.forEach((equipo, index) => {
            const tr = document.createElement('tr')
            
        if(index === 0){    
                tr.classList = 'first'
        }else if(index === tablaTotal.length-1 || index === tablaTotal.length-2 ){
               tr.classList = 'descend'
         }else if(index === tablaTotal.length-3){
              tr.classList = 'prom'
        }
            
        tr.innerHTML= `
                     <td>${equipo.standing_team}</td>
                     <td>${equipo.standing_P}</td>
                     <td><strong>${equipo.standing_PTS}</strong> </td>
                     <td>${equipo.standing_W}</td>
                     <td>${equipo.standing_D}</td>
                     <td>${equipo.standing_L}</td>
                `
                 tbody.appendChild(tr)
             });
          })
      }


    estadoSpinner(type){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = type;
    }

      
      async obtenerPartidosDia(leagueID){
        this.leagueID = leagueID
        const url = `https://allsportsapi.com/api/football/?met=Fixtures&leagueId=${this.leagueID}&timezone=America/Argentina/Buenos_Aires&APIkey=${this.apikey}&from=2020-06-30&to=2020-06-30`;
    
        // fetch a la api
        const partidosDia = await fetch(url);

        // respuesta en json
        const partido = await partidosDia.json();
        //console.log(partido);
        return {partido};

    
    }
    mostrarPartidos(torneoID){
       
        const torneoId = torneoID;
            
        this.obtenerPartidosDia(torneoId)
        .then((partido)=>{
           let todosPartidos = partido.partido.result
           console.log(partido)
           let resultado = document.createElement('div')
           resultado.setAttribute('id', "resultado-div")
           todosPartidos.forEach(partido=>{
               
               resultado.innerHTML += `<p class="result">${partido.event_home_team} ${partido.event_final_result} ${partido.event_away_team}</p>`
               document.querySelector('#resultado').appendChild(resultado)
               console.log(`${partido.event_home_team} ${partido.event_final_result} ${partido.event_away_team}`)
               //console.log(partido)
           })
            
            //console.log(partido.partido.result)

          })
          .catch(()=>{
            let resultado = document.createElement('div')
            resultado.setAttribute('id', "resultado-div")
            resultado.innerHTML = `<p class="result">No hay partidos</p>`
            document.querySelector('#resultado').appendChild(resultado)
            //console.log('no hay partidos')
          })
      }




}


// league_key: "11"
// league_round: ""
// league_season: "2019/2020"
// standing_A: "8"
// standing_D: "6"
// standing_F: "35"
// standing_GD: "27"
// standing_L: "3"
// standing_P: "23"
// standing_PTS: "48"
// standing_W: "14"
// standing_place: "1"
// standing_place_type: "Promotion - Copa Libertadores"
// standing_team: "Boca Juniors"
// standing_updated: "2020-03-10 03:06:36"
// team_key: "193" 

