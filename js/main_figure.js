

//LISTA
let listWord = [
    ["1", "Point.", "Punto.", "The point is the simplest geometric element.", "El punto es el elemento geométrico más simple.", "El punto no tiene dimensiones, solo posición."],
    ["2", "Line.", "Línea.", "A line is a straight one-dimensional figure.", "Una línea es una figura unidimensional recta.", "La línea tiene longitud pero no anchura."],
    ["3", "Triangle.", "Triángulo.", "A triangle has three sides and three angles.", "Un triángulo tiene tres lados y tres ángulos.", "El triángulo es un polígono de tres lados."],
    ["4", "Circle.", "Círculo.", "A circle is a round shape with no corners.", "Un círculo es una forma redonda sin esquinas.", "El círculo es una figura con todos los puntos a la misma distancia del centro."],
    ["5", "Square.", "Cuadrado.", "A square has four equal sides and four right angles.", "Un cuadrado tiene cuatro lados iguales y cuatro ángulos rectos.", "El cuadrado es un cuadrilátero regular."],
    ["6", "Rectangle.", "Rectángulo.", "A rectangle has four sides and four right angles.", "Un rectángulo tiene cuatro lados y cuatro ángulos rectos.", "Los lados opuestos del rectángulo son iguales."],
    ["7", "Rhombus.", "Rombo.", "A rhombus has four equal sides.", "Un rombo tiene cuatro lados iguales.", "El rombo es un paralelogramo con lados iguales."],
    ["8", "Trapezoid.", "Trapecio.", "A trapezoid has one pair of parallel sides.", "Un trapecio tiene un par de lados paralelos.", "El trapecio es un cuadrilátero con solo un par de lados paralelos."],
    ["9", "Pentagon.", "Pentágono.", "A pentagon has five sides and five angles.", "Un pentágono tiene cinco lados y cinco ángulos.", "El pentágono es un polígono de cinco lados."],
    ["10", "Hexagon.", "Hexágono.", "A hexagon has six sides and six angles.", "Un hexágono tiene seis lados y seis ángulos.", "El hexágono es un polígono de seis lados."],
    ["11", "Oval.", "Óvalo.", "An oval is a elongated circle.", "Un óvalo es un círculo alargado.", "El óvalo es una figura curva cerrada."],
    ["12", "Cube.", "Cubo.", "A cube has six square faces.", "Un cubo tiene seis caras cuadradas.", "El cubo es un poliedro regular."],
    ["13", "Pyramid.", "Pirámide.", "A pyramid has a base and triangular faces.", "Una pirámide tiene una base y caras triangulares.", "La pirámide es un poliedro con una base poligonal."],
    ["14", "Sphere.", "Esfera.", "A sphere is a perfectly round 3D shape.", "Una esfera es una forma 3D perfectamente redonda.", "La esfera tiene todos sus puntos a la misma distancia del centro."],
    ["15", "Cone.", "Cono.", "A cone has a circular base and a vertex.", "Un cono tiene una base circular y un vértice.", "El cono es una figura tridimensional con una base circular."],
    ["16", "Square.", "Cuadrado.", "A square has four equal sides and four right angles.", "Un cuadrado tiene cuatro lados iguales y cuatro ángulos rectos.", "El cuadrado es un cuadrilátero regular."],
    ["17", "Rectangle.", "Rectángulo.", "A rectangle has four sides and four right angles.", "Un rectángulo tiene cuatro lados y cuatro ángulos rectos.", "Los lados opuestos del rectángulo son iguales."],
    ["18", "Rhombus.", "Rombo.", "A rhombus has four equal sides.", "Un rombo tiene cuatro lados iguales.", "El rombo es un paralelogramo con lados iguales."],
    ["19", "Trapezoid.", "Trapecio.", "A trapezoid has one pair of parallel sides.", "Un trapecio tiene un par de lados paralelos.", "El trapecio es un cuadrilátero con solo un par de lados paralelos."],
    ["20", "Triangle.", "Triángulo.", "A triangle has three sides and three angles.", "Un triángulo tiene tres lados y tres ángulos.", "El triángulo es un polígono de tres lados."],
    ["21", "Equilateral triangle.", "Triángulo equilátero.", "An equilateral triangle has three equal sides.", "Un triángulo equilátero tiene tres lados iguales.", "Todos los lados y ángulos del triángulo equilátero son iguales."],
    ["22", "Triangle.", "Triángulo.", "A triangle has three sides and three angles.", "Un triángulo tiene tres lados y tres ángulos.", "El triángulo es un polígono de tres lados."],
    ["23", "Isosceles triangle.", "Triángulo isósceles.", "An isosceles triangle has two equal sides.", "Un triángulo isósceles tiene dos lados iguales.", "El triángulo isósceles tiene dos lados y dos ángulos iguales."],
    ["24", "Triangle.", "Triángulo.", "A triangle has three sides and three angles.", "Un triángulo tiene tres lados y tres ángulos.", "El triángulo es un polígono de tres lados."],
    ["25", "Scalene triangle.", "Triángulo escaleno.", "A scalene triangle has no equal sides.", "Un triángulo escaleno no tiene lados iguales.", "Todos los lados y ángulos del triángulo escaleno son diferentes."],
    ["26", "Pentagon.", "Pentágono.", "A pentagon has five sides and five angles.", "Un pentágono tiene cinco lados y cinco ángulos.", "El pentágono es un polígono de cinco lados."],
    ["27", "Hexagon.", "Hexágono.", "A hexagon has six sides and six angles.", "Un hexágono tiene seis lados y seis ángulos.", "El hexágono es un polígono de seis lados."],
    ["28", "Heptagon.", "Heptágono.", "A heptagon has seven sides and seven angles.", "Un heptágono tiene siete lados y siete ángulos.", "El heptágono es un polígono de siete lados."],
    ["29", "Octagon.", "Octógono.", "An octagon has eight sides and eight angles.", "Un octógono tiene ocho lados y ocho ángulos.", "El octógono es un polígono de ocho lados."],
    ["30", "Nonagon.", "Nonágono.", "A nonagon has nine sides and nine angles.", "Un nonágono tiene nueve lados y nueve ángulos.", "El nonágono es un polígono de nueve lados."],
    ["31", "Decagon.", "Decágono.", "A decagon has ten sides and ten angles.", "Un decágono tiene diez lados y diez ángulos.", "El decágono es un polígono de diez lados."],
    ["32", "Circle.", "Círculo.", "A circle is a round shape with no corners.", "Un círculo es una forma redonda sin esquinas.", "El círculo es una figura con todos los puntos a la misma distancia del centro."],
    ["33", "Oval.", "Óvalo.", "An oval is a elongated circle.", "Un óvalo es un círculo alargado.", "El óvalo es una figura curva cerrada."],
    ["34", "Ellipse.", "Elipse.", "An ellipse is a stretched circle.", "Una elipse es un círculo estirado.", "La elipse tiene dos ejes de simetría."],
    ["35", "Cube.", "Cubo.", "A cube has six square faces.", "Un cubo tiene seis caras cuadradas.", "El cubo es un poliedro regular."],
    ["36", "Prism.", "Prisma.", "A prism has two parallel bases.", "Un prisma tiene dos bases paralelas.", "El prisma es un poliedro con bases paralelas y caras laterales rectangulares."],
    ["37", "Pyramid.", "Pirámide.", "A pyramid has a base and triangular faces.", "Una pirámide tiene una base y caras triangulares.", "La pirámide es un poliedro con una base poligonal."],
    ["38", "Tetrahedron.", "Tetraedro.", "A tetrahedron has four triangular faces.", "Un tetraedro tiene cuatro caras triangulares.", "El tetraedro es un poliedro con cuatro caras triangulares."],
    ["39", "Sphere.", "Esfera.", "A sphere is a perfectly round 3D shape.", "Una esfera es una forma 3D perfectamente redonda.", "La esfera tiene todos sus puntos a la misma distancia del centro."],
    ["40", "Cylinder.", "Cilindro.", "A cylinder has two circular bases.", "Un cilindro tiene dos bases circulares.", "El cilindro es una figura tridimensional con bases paralelas circulares."],
    ["41", "Cone.", "Cono.", "A cone has a circular base and a vertex.", "Un cono tiene una base circular y un vértice.", "El cono es una figura tridimensional con una base circular."]
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
document.getElementById('teamA_btn_repeat_ES').addEventListener("click",()=>{
    teamA_phraseToSpeak_ES();  
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
console.log(utterance)
function teamA_phraseToSpeak(){
    utterance.text =teamA_colPhraseEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);   

    /** 
     * Microsoft Helena - Spanish (Spain)   → es-ES
     * Microsoft Laura - Spanish (Spain)   → es-ES
     * Microsoft Pablo - Spanish (Spain)   → es-ES
     * Google español    → es-ES
     * Google US English →  en-US
        Google UK English Female →  en-GB
        Google UK English Male →  en-GB 
    */ 
}
function teamA_phraseToSpeak_ES(){
    utterance.text =teamA_colPhraseES;
    utterance.rate="0.5";
    utterance.pitch = "2";  
    utterance.name = "Microsoft Helena ";
    utterance.voiceURI = "Microsoft Helena ";
    utterance.lang = "es-ES";
     
    window.speechSynthesis.speak(utterance);   
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



