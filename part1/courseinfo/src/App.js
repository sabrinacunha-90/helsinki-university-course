const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {
        props.content.map((item) => {
          return (
            <>
              <p>{item.part} {item.exercises}</p>
            </>
          )
        })
      }

    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

function App() {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const content = [
    { part: 'Fundamentos da biblioteca React', exercises: 10 },
    { part: 'Usando props para passar dados', exercises: 7 },
    { part: 'Estado de um componente', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={content[0].exercises + content[1].exercises + content[2].exercises} />
    </div>
  )
}

export default App
