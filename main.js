const main = document.querySelector('main')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

rock.addEventListener('click', respondToRock)
paper.addEventListener('click', respondToPaper)
scissor.addEventListener('click', respondToScissor)

const template = 
`
<h1>Rock Paper Scissor</h1>
<h2>Wins: </h2>
<h2>Ties: </h2>
<h2>Losses: </h2>
<button id="rock">Rock</button>
<button id="paper">Paper</button>
<button id="scissor">Scissor</button>
`

main.innerHTML = template