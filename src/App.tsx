import React from 'react';
import './App.css';
import {Message} from "./components/Message";

function App() {
  return (
    <div className="App">
         <Message name="Valerian Ehret"
                  text="Hello World!!!"
                  time ="12:05"
         />
    </div>
  );
}


export default App;
