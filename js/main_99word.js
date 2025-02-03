

//LISTA
let listWord=[
    ["1	","Watch	    ","Cuidado	","Watch out?	                            ","¿Ten cuidado?	                        ","'Watch' es la palabra más larga y significa 'observar', pero en este contexto se utiliza como imperativo para indicar precaución"],
    ["2	","Slowly	    ","Despacio	","Can you speak more slowly please?	    ","¿Puedes hablar más despacio por favor?	","'Slowly' es un adverbio que describe la manera de hablar, indicando que se desea una velocidad más lenta"],
    ["3	","Spell	    ","Deletrear	","Can you spell it?	                    ","¿Puede deletrearlo?	                ","'Spell' es un verbo que significa deletrear una palabra letra por letra"],
    ["4	","Here	    ","Aquí	    ","Come here	                            ","Ven aquí	                            ","'Here' es un adverbio de lugar que indica la posición del hablante o de algo cercano"],
    ["5	","Believe	","Creer	    ","Do you believe that?	                ","¿Lo crees?	                            ","'Believe' es un verbo que expresa la confianza en la verdad de algo"],
    ["6	","Know	    ","Saber	    ","Do you know what it means?	            ","¿Sabes lo que significa?	            ","'Know' se utiliza para expresar conocimiento o familiaridad con algo"],
    ["7	","Speak	    ","Hablar	    ","Do you speak English?	                ","¿Hablas inglés?	                    ","'Speak' indica la habilidad de comunicarse en un idioma"],
    ["8	","Understand	","Entender	","Do you understand?	                    ","¿Comprendes?	                        ","'Understand' se refiere a la capacidad de captar el significado de algo"],
    ["9	","Anyone	    ","Alguien	","Does anyone here speak English?	    ","¿Alguien de aquí habla inglés?	        ","'Anyone' se utiliza para referirse a cualquier persona de un grupo"],
    ["10	","Do	        ","Hacer	    ","Don't do that?	                        ","¿No hagas eso?	                        ","'Do' se utiliza como auxiliar para formar preguntas negativas y negativas"],
    ["11	","Excuse	    ","Disculpe	","Excuse me What did you say?	        ","Disculpe ¿Qué has dicho?	            ","'Excuse me' es una expresión utilizada para pedir disculpas o llamar la atención de alguien"],
    ["12	","Excuse	    ","Disculpe	","Excuse me where's the toilet?	        ","Disculpe ¿Dónde está el baño?	        ","'Excuse me' se utiliza para llamar la atención de alguien de manera cortés y pedir información"],
    ["13	","Time	    ","Vez	    ","From time to time	                    ","De vez en cuando	                    ","'Time' en esta expresión indica intervalos de tiempo irregulares"],
    ["14	","Right	    ","Razón	    ","He's right	                            ","El tiene razón	                        ","'Right' se utiliza para expresar acuerdo con una afirmación"],
    ["15	","Know	    ","Saber	    ","How do you know it?	                ","¿Cómo lo sabes?	                    ","'Know' indica certeza o conocimiento sobre algo"," Implica una comprensión profunda o evidencia sólida"],
    ["16	","Pronounce	","Pronunciar	","How do you pronounce that?	            ","¿Cómo se pronuncia eso?	            ","'Pronounce' se refiere a la articulación de una palabra, es decir, a la forma correcta de decirla"],
    ["17	","English	","Inglés	    ","How do you say that in English?	    ","¿Cómo dices eso en inglés?	            ","'English' se refiere al idioma en cuestión, y se utiliza para preguntar cómo se dice algo en específico"],
    ["18	","Like	    ","Gustar	    ","I don't like it	                    ","No me gusta	    |                   ","'Like' expresa una preferencia o gusto personal"," Indica que algo no es del agrado del hablante"],
    ["19	","English	","Inglés	    ","I don't speak English very well	    ","No hablo inglés muy bien	            ","'English' se refiere al idioma que el hablante está aprendiendo o dominando"],
    ["20	","Speak	    ","Hablar	    ","I don't speak very well	            ","No hablo muy bien	                    ","'Speak' indica la habilidad de comunicarse verbalmente en un idioma"],
    ["21	","Think	    ","Creo	    ","I don't think so	                    ","No lo creo	                            ","'Think' se utiliza para expresar una opinión o creencia"],
    ["22	","Understand	","Entiendo	","I don't understand	                    ","No entiendo	                        ","'Understand' indica la capacidad de comprender algo"],
    ["23	","Saying	    ","Diciendo	","I don't understand what you're saying	","No entiendo lo que estás diciendo	    ","'Saying' es un gerundio que se utiliza para referirse a lo que alguien está diciendo"],
    ["24	","anything	","algo	    ","I don't want it	                                    ","No lo quiero	                                         ","'Anything' representa algo general o indefinido"],
    ["25	","anything	","eso	        ","I don't want that	                                ","No quiero eso	                                         ","'Anything' denota algo específico"],
    ["26	","wonderful	","bien	    ","I had a wonderful time	                            ","Lo pasé muy bien	                                         ","'Wonderful' describe algo extraordinario"],
    ["27	","understand	","entiendo	","I understand now	                                ","Ahora entiendo	                                             ","'Understand' denota comprensión"],
    ["28	","sure	    ","seguro	    ","I'm not sure	                                    ","No estoy seguro	                                         ","'Sure' implica estar convencido"],
    ["29	","outside	    ","afuera	    ","Is it cold outside?	                                ","¿Hace frío afuera?	                                 ","'Outside' refiere al exterior"],
    ["30	","hot	       ","calor	","Is it hot?	","                                       ¿Hace calor?                                                 ","'Hot' describe temperatura elevada"],
    ["31	","raining	    ","lloviendo	","Is it raining?	                                    ","¿Está lloviendo?	                                     ","'Raining' indica lluvia en progreso"],
    ["32	","there	    ","allí	    ","It's over there	                                    ","Está allí	                                             ","'There' señala ubicación"],
    ["33	","little	    ","poco	    ","Just a little!	                                    ","¡Solo un poco!	                                             ","'Little' expresa una cantidad pequeña"],
    ["34	","moment	    ","momento	    ","Just a moment!	                                    ","¡Solo un momento!	                                     ","'Moment' indica un breve periodo"],
    ["35	","looking	    ","pasa	    ","Let's go and have a look	                        ","Vamos a ver qué pasa	                                 ","'Looking' implica observar o investigar"],
    ["36	","tell	    ","dime	    ","Tell me	","Dime	                                                                                             ","'Tell' denota comunicar información"],
    ["37	","inviting	","invitarme	","Thanks for inviting me to your home	                ","Gracias por invitarme a tu casa","	                     ","'Inviting' es una acción de cortesía"],
    ["38	","thinking	","haciendo	","What are you doing?	                                ","¿Qué estás haciendo?	                                 ","'Thinking' indica un proceso mental"],
    ["39	","thinking	","pensando	","What are you thinking about?	                    ","¿Qué estás pensando?	                                     ","'Thinking' denota una reflexión"],
    ["40	","think	    ","opinas	    ","What do you think?	                                ","¿Qué opinas?	                                             ","'Think' se usa para expresar ideas"],
    ["41	","happens	    ","pasando	    ","What happens?	                                    ","¿Qué está pasando?	                                 ","'Happens' indica algo que ocurre"],
    ["42	","that	    ","es	        ","What is it?	                                    ","¿Qué es?	                                                 ","'That' indica identidad"],
    ["43	","that	    ","eso	        ","What is that?	                                    ","¿Qué es eso?	                                         ","'That' señala algo específico"],
    ["44	","this	    ","esto	    ","What is this?	                                    ","¿Qué es esto?	                                             ","'This' apunta a algo cercano"],
    ["45	","where	    ","donde	    ","Where are you from?	                                ","¿De dónde eres?	                                     ","'Where' indica ubicación"],
    ["46	","anything	","algo	    ","Do you need anything else?	                        ","¿Necesitas algo más?	                                     ","'Anything' denota posibilidad"],
    ["47	","much	    ","cuánto	    ","How much is it?	                                    ","¿Cuánto cuesta?	                                     ","'Much' mide cantidad"],
    ["48	","cheaper	    ","barata	    ","I thought the clothes were cheaper	                ","Pensaba que la ropa era más barata","	                 ","'Cheaper' compara precios"],
    ["49	","shopping	","compras	    ","I'd like to go shopping","Me gustaría ir de compras","'Shopping' implica adquirir bienes"],
    ["50	","later	    ","más tarde	","I'll come back later	                            ","Volveré más tarde","	                                         ","'Later' refiere a tiempo futuro"],
    ["51	","sorry	    ","siento	    ","I'm sorry we're sold out	                        ","Lo siento pero no nos queda","	                             ","'Sorry' expresa disculpa"],
    ["52	","cheaper	    ","barato	    ","Is there anything cheaper?	                        ","¿Hay algo más barato?	                                 ","'Cheaper' indica menor costo"],
    ["53	","sorry	    ","siento	    ","Sorry we don't have any	                            ","Lo siento, no tenemos ninguno","	                         ","'Sorry' denota pesar"],
    ["54	","small	    ","pequeño	    ","The big one or the small one?	                    ","¿El grande o el pequeño?	                             ","'Small' describe tamaño reducido"],
    ["55	","try	        ","pruébalo	","Try it on	                                        ","Pruébalo","	                                             ","'Try' sugiere probar algo"],
    ["56	","that	    ","eso	        ","What is that?	                                    ","¿Qué es eso?	                                         ","'That' señala identidad"],
    ["57	","size	    ","talla	    ","What size?	                                        ","¿Qué talla?	                                             ","'Size' mide dimensión"],
    ["58	","time	    ","hora	    ","What time does the store open?	                    ","¿A qué hora abre la tienda?	                             ","'Time' refiere a tiempo"],
    ["59	","which	    ","cuál	    ","Which one do you want?	                            ","¿Cuál quieres?	                                             ","'Which' indica selección"],
    ["60	","cheaper	    ","barato	    ","Which one is cheaper?	                            ","¿Cuál es más barato?	                                 ","'Cheaper' compara costos"],
    ["61	","best	    ","mejor	    ","Which one is the best?	                            ","¿Cuál es el mejor?	                                         ","'Best' expresa superioridad"],
    ["62	","anything	","más	        ","Anything else?	                                    ","¿Algo más?	                                             ","'Anything' implica otra cosa adicional"],
    ["63	","recommend	","cuenta	    ","Can I have the bill please?	                        ","¿Me puede dar la cuenta por favor?	                     ","'Recommend' implica sugerencia"],
    ["64	","recommend	","sal	        ","Can you pass me the salt please?	                ","¿Me puedes pasar la sal por favor?	                     ","'Recommend' se usa para pedir algo educadamente"],
    ["65	","restaurant	","restaurante	","Can you recommend a good restaurant around here?	","¿Puedes recomendar algún buen restaurante por aquí?	 ","'Restaurant' especifica un lugar para comer"],
    ["66	","take	    ","pago	    ","I'll take it	                                    ","Yo pago","	                                                 ","'Take' indica aceptar algo"],
    ["67	","everything	","todo	    ","Is everything ok?	                                ","¿Está todo bien?	                                         ","'Everything' abarca totalidad"],
    ["68	","ticket	    ","billete	    ","A one way ticket	                                ","Un billete de ida","	                                     ","'Ticket' refiere a un pase de transporte"],
    ["69	","ticket	    ","billete	    ","A round trip ticket	                                ","Un billete de ida y vuelta","	                     ","'Ticket' refiere a un pase de transporte"],
    ["70	","anything	","taxi	    ","Do you know where I can get a taxi?	            ","¿Sabes dónde puedo conseguir un taxi?	                     ","'Anything' implica buscar un servicio"],
    ["71	","stop	    ","autobúses	","I'll take you to the bus stop	                    ","Te llevaré a la parada del autobúses","	                     ","'Stop' refiere a una parada específica"],
    ["72	","anything	","lejos	    ","Is it far from here?	                            ","¿Está lejos de aquí?	                                     ","'Anything' denota distancia"],
    ["73	","address	    ","dirección	","Please take me to this address	                    ","Por favor llévame a esta dirección","	                 ","'Address' es una ubicación específica"],
    ["74	","plane	    ","avión	    ","When does the plane arrive?	                        ","¿Cuándo llega el avión?	                             ","'Plane' refiere a transporte aéreo"],
    ["75	","back	    ","más tarde	","Can you call back later?	                        ","¿Puedes llamar más tarde?	                                 ","'Back' indica una acción repetida"],
    ["76	","hear	    ","oigo	    ","I can't hear you	                                ","No te oigo","	                                             ","'Hear' refiere a la capacidad auditiva"],
    ["77	","check	    ","ver	Let     ","me check	                                        ","Déjame ver","	                                         ","'Check' implica verificar algo"],
    ["78	","speak	    ","hablar	    ","May I speak to Mr Smith please?                   ","¿Puedo hablar con el Sr"," Smith por favor?	                 ","'Speak' indica comunicación verbal"],
    ["79	","calling	    ","llama	    ","Who's calling?	                                    ","¿Quién llama?	                                         ","'Calling' denota comunicación telefónica"],
    ["80	","call	    ","llamada	    ","Would you ask him to call me back please?	        ","¿Le pedirías que me devuelva la llamada, por favor?	 ","'Call' implica contactar nuevamente"],
    ["81	","hotel	    ","Hotel	    ","Do you know how to get to the NH Hotel?	            ","¿Sabes cómo llegar al Hotel NH?	                     ","'Hotel' refiere a un lugar de hospedaje"],
    ["82	","nights	    ","noches	    ","For how many nights?	                            ","¿Por cuántas noches?	                                     ","'Nights' mide duración"],
    ["83	","flight	    ","vuelo	    ","How long before the flight must I check in?	","¿Cuánto tiempo antes del vuelo debo hacer el chequeo?	         ","'Flight' implica viaje en avión"],
    ["84	","staying	    ","quedar	    ","How long will you be staying?	                    ","¿Cuánto tiempo te vas a quedar?	                     ","'Staying' denota permanencia"],
    ["85	","city	    ","ciudad	    ","I'd like a map of the city	                        ","Me gustaría un mapa de la ciudad","	                         ","'City' denota una ubicación geográfica amplia"],
    ["86	","condition	","habitación	","Is there air condition in the room?	                ","¿Hay aire acondicionado en la habitación?	             ","'Condition' denota confort"],
    ["87	","document	","documento	","Please fill out this form	                        ","Por favor llene este documento","	                         ","'Document' refiere a un formulario oficial"],
    ["88	","time	    ","salida	    ","What time is check out?	                            ","¿A qué hora es la salida?	                             ","'Time' mide temporalidad"],
    ["89	","rent	    ","alquilar	","Where can I rent a car?	                            ","¿Dónde puedo alquilar un coche?	                     ","'Rent' indica acceso temporal a algo"],
    ["90	","forget	    ","olvídalo	","Forget it	                                        ","Olvídalo","	                                                 ","'Forget' denota desinterés o falta de recuerdo"],
    ["91	","good	    ","bien	    ","I'm having a good time	                            ","Me la estoy pasando bien","	                                 ","'Good' implica disfrute o calidad positiva"],
    ["92	","hurry	    ","prisa	    ","Hurry up!	                                        ","¡Date prisa!	                                             ","'Hurry' denota urgencia"],
    ["93	","like	    ","cae	        ","I don't like him	                                ","No me cae bien","	                                     ","'Like' denota afinidad o preferencia"],
    ["95	","later	    ","luego	    ","See you later	                                    ","Hasta luego","	                                             ","'Later' refiere a un momento futuro"],
    ["94	","right	    ","mismo	    ","Right there	                                        ","Allí mismo","	                                         ","'Right' indica precisión"],
    ["96	","talking	    ","hablando	","What are you two talking about?	                    ","¿De qué están hablando ustedes dos?	             ","'Talking' implica comunicación activa"],
    ["97	","yesterday	","hiciste	    ","What did you do yesterday?	                        ","¿Qué hiciste ayer?	                                     ","'Yesterday' refiere a tiempo pasado"],
    ["98	","looking	    ","busca	    ","Who are you looking for?	                        ","¿A quién busca?	                                     ","'Looking' implica buscar activamente"],
    ["99	","Talking	","Hablando	","What are you two talking about?	    ","¿De qué están hablando ustedes dos?	","'Talking' es un gerundio que indica la acción de hablar"]
]

const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd"),
      totalList=document.getElementById("totalList");
      totalList.textContent=listWord.length;
      
let numStart=teamA_numStart.value-1,
numEnd=teamA_numEnd.value-1;//listWord.length/2 →22 
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],
    teamA_num_random=document.getElementById("teamA_num_random");  


  

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{    
    teamA_phraseToSpeak(); 
    teamA_num_random.textContent= teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);

    const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd");


    teamA_numStart.value=1;
    teamA_numEnd.value=listWord.length;

});  

// ingresar área de estudio
function fromToArea() {
    const teamA_numStart=document.getElementById("teamA_numStart").value-1,
      teamA_numEnd=document.getElementById("teamA_numEnd").value-1;
    numStart=teamA_numStart;
      numEnd=teamA_numEnd;
    //numStart=teamA_numStart
}
  


//Función consegir un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function  teamA_numAleatorio(numStart,numEnd) {
    const minCeiled = Math.ceil(numStart);
    const maxFloored = Math.floor(numEnd);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



let teamA_inputEN_phrase=document.getElementById("teamA_inputEN_phrase"),
    teamA_wordEnglish=document.getElementById("teamA_wordEnglish"),
    teamA_wordSpanish=document.getElementById("teamA_wordSpanish");

 
teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
teamA_wordEnglish.textContent=teamA_colWordEN; 

// BOTON REPETIR
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
document.getElementById('teamA_btn_repeat_word').addEventListener("click",()=>{
    teamA_wordToSpeak();
    console.log()
});

//BOTON MUESTRAME

document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
   teamA_inputEN_phrase.classList.add("showYes");   
   teamA_wordEnglish.classList.add("showYes");
   //color atomático
   teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
            //teamA_num_random.style.backgroundColor=listWord[i][1].trim();
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }   
});

//BOTON ESPAÑOL
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.textContent=teamA_colPhraseES;
    teamA_wordSpanish.textContent=teamA_colWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */
function teamA_phraseToSpeak(){
    utterance.text =teamA_colPhraseEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);   

    /** 
     * Google US English _ en-US
        Google UK English Female _ en-GB
        Google UK English Male _ en-GB 
    */ 
}

function teamA_wordToSpeak(){
    utterance.text =teamA_colWordEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}

 

 /**
  * LISTA CONTENIDO DE FRASES  team A
  */
const tblBody_teamA = document.createElement("tbody");
const teamA_tablas=document.getElementById("teamA_tablas");
for (let i = 0; i < listWord.length; i++) {
    const hilera = document.createElement("tr");
         hilera.setAttribute("id",`teamA_fila${i}`);
 
    for (let j = 0; j < listWord[0].length; j++) {
      const celda = document.createElement("td");
      const textoCelda = document.createTextNode(listWord[i][j]
      );
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    
    tblBody_teamA.appendChild(hilera);
    
 }
 teamA_tablas.appendChild(tblBody_teamA);


//COLOREAR FILAS teamA
let teamA_fila=" ";

teamA_num_random.addEventListener("click",()=>{ 

    
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }
    
});




//teamA boton siguiente teamA
let teamA_btn_next=document.getElementById('teamA_btn_next');

teamA_btn_next.addEventListener("click",()=>{
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    for (let i = 0; i < listWord.length; i++) {
        
        if(i !== teamA_rowRamdon){
            teamA_fila.style.backgroundColor="green";
        }
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
            teamA_num_random.style.backgroundColor="transparent";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],

    
    teamA_phraseToSpeak();
   
  
    teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
    teamA_wordEnglish.textContent=teamA_colWordEN; 
    teamA_wordSpanish.textContent=teamA_colWordES;
    teamA_num_random.textContent=  teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
    //teamA_fila.style.backgroundColor="red";

    teamA_inputES_phrase.textContent=" ";
    teamA_wordSpanish.textContent=" ";
    teamA_inputEN_phrase.classList.remove("showYes");
    teamA_wordEnglish.classList.remove("showYes");     

});

teamA_wordEnglish.addEventListener("click",()=>{
    teamA_wordToSpeak();
});



