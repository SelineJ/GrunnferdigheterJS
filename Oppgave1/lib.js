   //model
   let antFeil = 0;
   let antRiktig = 0;
   let onOrOff = false;
   let tilbakeMelding;
   let questionCount = 1;
   
   

 //controller
 function checkAnswer(resultat) 
{
     if(resultat == true)
     {
         antRiktig++;
         onOrOff = true;
         tilbakeMelding = 'RIKTIG!';
         console.log('Antall riktig: ' + antRiktig);  
     }
     show();

     if(resultat == false)
      {
         antFeil++;
         onOrOff = true;
         tilbakeMelding = 'FEIL!';
         console.log('Antall feil: ' + antFeil);
         
     }
     show();
   }



   function next()
 {
  tilbakeMelding = '';
     onOrOff = false;
     questionCount++;
     show();
 }

 function startOver(tall)
 {
   antFeil = 0;
   antRiktig = 0;
   onOrOff = false;
   tilbakeMelding;
   questionCount = 1;
     show();
 }

 

function question(tall)
        {
          if(tall == 1)
           {
             return`<h3>1. Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Gul</li> </button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Rosa</li> </button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Lilla</li> </button>
            </ol>
            `;
          }
          if(tall == 2)
          {
            
              return`<h3>2. Hva er favorittmaten til Seline?</h3>
             <ol>
             <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Taco</li> </button>
             <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Pizza</li> </button>
             <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Nuggets dyppet i nonstop is</li> </button>
             </ol> `;

          }
          if(tall == 3)
          {
            
               return`<h3>3. Hva heter pusen til Seline?</h3>
              <ol>
              <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Puseklumpen</li> </button>
              <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Odin</li> </button>
              <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Pus</li> </button>
              </ol> `;
          }
          if(tall == 4)
          {
            
                return`<h3>4. Hvilken farge har bilen til Seline</h3>
               <ol>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Gul</li> </button>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>Lilla</li> </button>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>Grå</li> </button>
               </ol> `;
          }
          if(tall == 5)
          {
          
                return`<h3>5. Når er Seline født</h3>
               <ol>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>2000</li> </button>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"> <li>1998</li> </button>
               <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"> <li>1975</li> </button>
               </ol> `;
          }

               //resultatSide
          if(tall == 6)
          {
            if(antRiktig == 5) 
            {
            tilbakeMelding = 'Du fikk alle riktig, så flink du er!';
                return`<h3>Resultat:</h3>
                         <h5>${antRiktig}/5 riktige</h5> `;
            }

            if(antRiktig < 5) 
            {
            tilbakeMelding = '';
                return`<h3>Resultat:</h3>
                      <h5>${antRiktig}/5 riktige</h5> 
              <button onclick="startOver(${questionCount})" >Prøv igjen</button>
            `;}
          }
           show();
            
         }
         
         
//View

function show() 
{ 
   document.getElementById('app').innerHTML = `<h1>Quiz</h1>
    ${question(questionCount)}
    <div class="svar">${(tilbakeMelding)? tilbakeMelding:''}</div>
    </br>
    <div style="${questionCount == 6 ? 'display: none;': ''}">Riktige svar: ${antRiktig}/5</div>
    <button style="${questionCount == 6 ? 'visibility: hidden;': ''}"${(onOrOff) ? '' : 'disabled'} onclick="next(${questionCount})" >Neste --></button>
    `;
    
}
