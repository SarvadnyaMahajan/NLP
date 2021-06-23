var SpeechRecognition=window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML=""
    recognition.start() 
}

recognition.onresult=function(event) {
    console.log(event)
    var Content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=Content
    console.log(Content)
    if (Content=="take my selfie") {
    console.log("taking selfie")
    speak()
    }
} 

 function speak() {
     var syntheis=window.speechSynthesis

     speak_data="Taking your Selfie in 5 second"

     var utterThis= new SpeechSynthesisUtterance(speak_data)

     syntheis.speak(utterThis)

     Webcam.attach(camera);

     setTimeout(function(){
        takesnapshot()
        save()
     },5000)
 }

 camera=document.getElementById("camera")
 Webcam.set({
    width: 360,
    height: 260,
    image_format: 'png',
    png_quality: 90
  });
  
  function takesnapshot() {
      Webcam.snap(function(data_uri){
          document.getElementById("reward").innerHTML = '<img id = "selfie_image"  src = "'+data_uri+'">'
      }) 
  }

  function save() {
      link=document.getElementById("link")
      img=document.getElementById("selfie_image").src 
      link.href=img
      link.click() 
  }  