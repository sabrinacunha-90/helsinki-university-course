import { useState } from "react"

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      {text === "positive" ? (
        <table>
          <tbody>
            <tr>
              <td col="8"> {text} </td>
              <td col="8"> {value} % </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            <tr>
              <td col="12"> {text} </td>
              <td col="12"> {value} </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const countGood = () => {
    const goodValue = good + 1
    const allValue = all + 1

    setGood(goodValue)
    setAll(allValue)

    if (allValue > 0) {
      setAverage(allValue / 3)
    }

    if (goodValue > 0) {
      setPositive((goodValue * 100) / allValue)
    }
  }

  const countNeutral = () => {
    const allValue = all + 1

    setNeutral(neutral + 1)
    setAll(allValue)

    if (allValue > 0) {
      setAverage(allValue / 3)
    }

    if (good > 0) {
      setPositive((good * 100) / allValue)
    }
  };

  const countBad = () => {
    const allValue = all + 1

    setBad(bad + 1)
    setAll(allValue)

    if (allValue > 0) {
      setAverage(allValue / 3)
    }

    if (good > 0) {
      setPositive((good * 100) / allValue)
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={countGood} text="good" />
        <Button handleClick={countNeutral} text="neutral" />
        <Button handleClick={countBad} text="bad" />
      </div>
      <h1>statistics</h1>
      {good > 0 || neutral > 0 || bad || 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      ) : (
        <div>no feedback given</div>
      )}
    </div>
  )
}

export default App
