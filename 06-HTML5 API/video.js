/*
	AUDIO Y VIDEO

	Eventos
		play: cuando se reproduce el video
		pause: cuando se pausa
		ended: cuando termina el video

	MEtodos
		play()
		pause()
		load()	

	Propiedades
		currentTime: tiempo actual de reproduccion en milisegundos
		duration: duracion total del video
		volume: volumen del video de (0 a 1)


*/

var video = document.getElementById('video');
var play = document.getElementById('play');
var volumen = document.getElementById('volumen');
var time  = document.getElementById('time');


video.addEventListener('play', function(){
	console.log("Reproduciendo");
});
video.addEventListener('ended', function(){
	console.log("Finalizado");
});
play.addEventListener('click', function(){
	video.play();
});


play.addEventListener('click', function(){
	if(play.textContent === "Play"){
		video.play();
		this.textContent = "Pause";
	}else{
		video.pause();
		this.textContent = "Play";
	}	
});

volumen.addEventListener('change', function(){
	video.volume = this.value / 100;
});


video.addEventListener('play', function(){
	time.textContent = video.currentTime;
});

