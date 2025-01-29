import React from 'react'

const Test = ({title}) => { 
  return (
    <h2>{title}</h2>
  )
  
}

const App = () => {
  return (
    <>
    <Test title="new" />
    <Test title="Movie" />
    <Test title="latest Trande" />
    
    </>
  )

}

export default App