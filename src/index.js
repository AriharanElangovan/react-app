import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
let hrs=0;
let secs=0;
let mins=0;
let counter = 0;
function show() {
  
  if(counter<1000){
    counter++;
  }
  else{
    counter=0;
    secs++;
    if(secs==60){
      mins++;
      secs=0;
      if(mins==60){
        hrs++;
        mins=0;
        ReactDOM.render(<p>Hrs:{hrs}</p>,document.getElementById('hours'));
      }
      ReactDOM.render(<p>Mins:{mins}</p>,document.getElementById('mins'));
    }
    ReactDOM.render(<p>Secs:{secs}</p>,document.getElementById('secs'));
  }
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById('msecs'));
}

setInterval(show, 1);
ReactDOM.render(<p>Secs:{secs}</p>,document.getElementById('secs'));
ReactDOM.render(<p>Mins:{mins}</p>,document.getElementById('mins'));
ReactDOM.render(<p>Hrs:{hrs}</p>,document.getElementById('hours'));
