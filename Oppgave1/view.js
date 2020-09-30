//View
show();
function show() 
{ 

html =
    `
    <h1>Quiz</h1>
    ${question(questionCount) }
    <div class="svar">${(tilbakeMelding)? tilbakeMelding:''}</div>
    </br>
    <div>Riktige svar: ${antRiktig}/10<div>
    <button ${(onOrOff) ? '' : 'disabled'} onclick="next(${questionCount})">Neste --></button>
    `;
    
}

function question(tall)
        {
           if(tall == 1)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(true)"><li>Lilla</li></button>
            </ol>`;
            }
            show();
            
            if(tall == 2)
           {
            return `<h3>Hva heter pusen min?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Odin</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Puseklump</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Pus</li></button>
            </ol>`;
            }
            if(tall == 3)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
       
        if(tall == 4)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
          
        if(tall == 5)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
         
        if(tall == 6)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
        
        if(tall == 7)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
          
        if(tall == 8)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
         
        if(tall == 9)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
          
        if(tall == 10)
           {
            return `<h3>Hva er favorittfargen til Seline?</h3>
            <ol>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Gul</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, false)"><li>Rosa</li></button>
            <button class="svarAlternativer" ${(onOrOff) ? 'disabled': '' } onclick="checkAnswer(this, true)"><li>Lilla</li></button>
            </ol>`;
            }
            
            show();
        }