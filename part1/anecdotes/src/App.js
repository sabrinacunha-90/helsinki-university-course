import { useState } from "react"

function App() {
  const anecdotes = [
    "Se fazer algo dói, faça isso com mais frequência.",
    "Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!",
    "Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.",
    "Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.",
    "Otimização prematura é a raiz de todo o mal.",
    "Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.",
    "Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.",
    "A única maneira de ir rápido é ir bem.",
  ]

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })

  const [selected, setSelected] = useState(0)
  const [anecdoteMostVotes, setAnecdoteMostVotes] = useState()

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const number = Math.floor(Math.random() * (max - min + 1)) + min

    setSelected(number)
  }

  const hasVote = () => {
    const updatePoints = points[selected]++
    setPoints({ ...points, updatePoints })

    const anecdote = Object.keys(points).reduce((a, b) =>
      points[a] > points[b] ? a : b
    )
    setAnecdoteMostVotes(anecdote)
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <div>
          <button onClick={hasVote}>vote</button>
          <button onClick={() => getRandomIntInclusive(0, 7)}>
            next anecdote
          </button>
        </div>
      </div>
      <div>
        {points[anecdoteMostVotes] > 0 && (
          <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[anecdoteMostVotes]}</p>
            <p>has {points[anecdoteMostVotes]} votes</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
