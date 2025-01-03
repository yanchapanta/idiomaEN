
const $containerVoices = document.getElementById("containerVoices"),
    $btn = document.getElementById("btn"),
    $text = document.getElementById("text");
let voices = [];
let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */

function textToSpeak(){
    utterance.text = $text.value;   
    /*     
    utterance.pitch = 0.5;  
    utterance.name="Google UK English Male";
    utterance.lang="en-GB";
    */
    window.speechSynthesis.speak(utterance);   

    /** 
     * Google US English _ en-US
        Google UK English Female _ en-GB
        Google UK English Male _ en-GB 
    */ 
}
document.addEventListener("DOMContentLoaded",(e)=>{
    window.speechSynthesis.addEventListener("voiceschanged", (e)=>{
        voices = window.speechSynthesis.getVoices();/**voces guardadas */
        console.log(voices);

       
        
        voices.forEach( el =>{
            const $option = document.createElement("option");
            $option.value = el.name;
           
            // $option.textContent = `${el.name} - ${el.lang}`;
            $option.textContent = `${el.name} - ${el.lang}`;
            $containerVoices.appendChild($option);
            
        });
        
    });
});
document.addEventListener("click", (e)=>{
    if(e.target === $btn){       
        textToSpeak();
        
    }
});
document.addEventListener("change",(e) =>{
    if(e.target === $containerVoices) {
        console.log("hola");       
        utterance.voice = voices.find(voice =>  voice.name === e.target.value);

    }
});