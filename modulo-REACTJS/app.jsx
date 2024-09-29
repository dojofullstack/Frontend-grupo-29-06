import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}


function App(){

  return <>
    <header></header>
      <div></div>
    <footer></footer>

  </>

}


const root = createRoot(document.getElementById('root'));


root.render( <App/> );