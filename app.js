const context = new AudioContext()//esto es un objeto


function jsNota(frecuencia) {
   let o= context.createOscillator();
   g=context.createGain()//para darle tiempo a la nota
   o.connect(g) 
   //o.type='sawtooth'//sonido de JS
   
   o.frequency.value=frecuencia//frecuencia del sonido
   g.connect(context.destination)//conectado el gain con el destino del contxto
   o.start(0)
   g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5)//funcion para darle un tiempo
}




