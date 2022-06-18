import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'

function ErrorFallback({error , resetErrorBoundary} : FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function ErrorOccurComponent(){
  
//throw new Error('component error')

  async function event1(){
    console.log('event1')
    let ret = 0;
    for(let i = 0; i < 10; i ++)
      ret += i
    return ret
  }
  async function event2(str : number){
    console.log('event2')
    console.log(str)
  }
  async function onClickErrorOccurHandle(){
    let data = await event1()
    event2(data)
  }
  
  return (
    <>
      <button onClick={()=>onClickErrorOccurHandle()}> OCCUR ERROR </button>
    </>
  )
}


function App() {

  function onClickErrorHandle(){
    throw new Error("ON CLICK ERROR")
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorOccurComponent/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
