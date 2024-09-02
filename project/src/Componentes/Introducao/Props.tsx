import React from 'react'

// Definindo uma interface para as props
interface WelcomeProps{
  name: string;
  n: number;
  pais: string;
  time: string;
}

// Componente funcional que utiliza prop
const Welcome: React.FC<WelcomeProps> = ({name, n, pais,time}) => {
  return(
    <div>
      <h1> Hello, {name}!</h1>
      <p> Your number is {n}</p>
      <p> Your team is from {pais}</p>
      <p> Your team is {time}</p>
    </div>
  )
}

function Props() {

  return (
    <div className = "app">
        <Welcome name="Carol" n={15} pais="Italy" time="Pallavolo Scandicci Savino Del Bene"/>
        <Welcome name="Rosamaria" n={7} pais="Japan" time="Denso Airybees"/>
        <Welcome name="Júlia" n={17} pais="Turky" time="Türk Hava Yollari Spor Kulübü"/>
        <Welcome name="Thaísa" n={6} pais="Brasil" time="Minas Tênis Clube"/>
    </div>
  )
}

export default Props
