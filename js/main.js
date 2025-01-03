
document.getElementById('hablar').addEventListener("click",()=>{
    textToSpeak()    
});

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */

function textToSpeak(){
    utterance.text =document.getElementById("texto").value ;   
    console.log(utterance)
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
    
    console.log(utterance.lang)
    
    window.speechSynthesis.speak(utterance);   

    /** 
     * Google US English _ en-US
        Google UK English Female _ en-GB
        Google UK English Male _ en-GB 
    */ 
}

let voices = [];
document.addEventListener("DOMContentLoaded",(e)=>{
    window.speechSynthesis.addEventListener("voiceschanged", (e)=>{
        voices = window.speechSynthesis.getVoices();/**voces guardadas */
        console.log(voices);

       
        
        voices.forEach( el =>{
            const $option = document.createElement("option");
            $option.value = el.name;
           
            // $option.textContent = `${el.name} - ${el.lang}`;
            $option.textContent = `${el.name} - ${el.lang}`;
            //$containerVoices.appendChild($option);
            
        });
        
    });
});

