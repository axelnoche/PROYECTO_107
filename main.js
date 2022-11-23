var reconocedorVoz = window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Textbox = document.getElementById( "textbox");

function start(){
    document.getElementById("microfono").src = "microfono.png";
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
    setTimeout(function()
    {
        document.getElementById("microfono").src = "microfono.png";
    
    }, 4000
    );
}
function speak(){
     var habla = window.speechSynthesis;
      speak_data = "Tu selfie se tomará en 3 segundos";
       var diEsto = new SpeechSynthesisUtterance(speak_data);
       diEsto.pitch = 10;
       diEsto.volume = 0.4;
       habla.speak(diEsto);
       Webcam.attach(camera);
       setTimeout (function(){
        tomar_foto();
        save ();

       },3000);
       }
    camera = document.getElementById("camera");
    Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
    });