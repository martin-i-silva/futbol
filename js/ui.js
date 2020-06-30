// class Interfaz {
//     constructor(){
//         this.init();
//     }

//     init(){
//         this.construirSelect();
//     }


//     construirSelect(){
//         api.obtenerMonedasAPI()
//         .then(monedas=>{

//             const select = document.getElementById('criptomoneda')

//             for(const [key, value] of Object.entries(monedas.monedas.Data)){
//                 // Añadir el symbol y e nombre como opciones
//                 const opcion = document.createElement('option');
//                 opcion.value = value.Symbol;
//                 opcion.appendChild(document.createTextNode(value.CoinName))
//                 select.appendChild(opcion)
                
//                 //console.log(value.CoinName)
//             }
//         })
//     }


//     // Imprime el resultado de la cotizacion
//     mostrarResultado(resultado, moneda, cripto){

//         const datosMoneda = resultado[cripto][moneda]
//         // Si existe resultado anterior eliminar
//         const resultadoAnterior = document.querySelector('#resultado>div')
//         if(resultadoAnterior){
//             resultadoAnterior.remove();
//         }
        
//         let precio = datosMoneda.PRICE.toFixed(2);
//         let actualizado = new Date(datosMoneda.LASTUPDATE*1000).toLocaleDateString('es-AR')

//         console.log(datosMoneda)
//         // construir el template
//         let templetHTML = `
//             <div class="card bg-warning">
//                 <div class="card-body text-light">
//                     <h2 class="card-title">Resultado:</h2>
//                     <p> El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}
//                     <p>Variacion ultimo dia: ${datosMoneda.CHANGEPCTDAY.toFixed(5)} %</p> 
//                     <p>Ultima actualizacion: ${actualizado}</p>
//                 </div>
//             </div>
//         `;

//         this.estadoSpinner('block');
        
//         setTimeout(()=>{
//             //insertar el resultado
//             document.querySelector('#resultado').innerHTML = templetHTML;
//             this.estadoSpinner('none');
//         }, 3000)
        
//  }
//     // mostrar spinner
//     estadoSpinner(type){
//         const spinner = document.querySelector('.contenido-spinner');
//         spinner.style.display = type;
//     }
// }