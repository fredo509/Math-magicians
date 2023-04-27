import React, { useState } from 'react';
import displayLogo from './displayLogo';
import calculate from '../logic/calculate';

export default function theCalculator() {
  // eslint-disable-next-line
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eventCalculation = (e) => {
    setState({ ...state, ...calculate(state, e.target.value) });
  };

  return (
    <body>
      <header>
        <p>
          {displayLogo()}
        </p>
      </header>
      <main>
        <section>
          <div id="screen">
            {state.total}
            {' '}
            {state.operation}
            {' '}
            {state.next}
          </div>
          <div id="keyboard">
            <div className="btnBox">
              <button id="btnAC" type="button" onClick={eventCalculation} value="AC">AC</button>
            </div>
            <div className="btnBox">
              <button id="btn+/-" type="button" onClick={eventCalculation} value="+/-"> +/- </button>
            </div>
            <div className="btnBox">
              <button id="btnModulo" type="button" onClick={eventCalculation} value="%"> % </button>
            </div>
            <div className="btnBox orj">
              <button id="btnDivision" type="button" onClick={eventCalculation} value="÷"> ÷ </button>
            </div>
            <div className="btnBox">
              <button id="btnSept" type="button" onClick={eventCalculation} value="7"> 7 </button>
            </div>
            <div className="btnBox">
              <button id="btnhuit" type="button" onClick={eventCalculation} value="8"> 8 </button>
            </div>
            <div className="btnBox">
              <button id="btnNeuf" type="button" onClick={eventCalculation} value="9"> 9 </button>
            </div>
            <div className="btnBox orj">
              <button id="btnMul" type="button" onClick={eventCalculation} value="x"> x </button>
            </div>
            <div className="btnBox">
              <button id="btnQuatre" type="button" onClick={eventCalculation} value="4"> 4 </button>
            </div>
            <div className="btnBox">
              <button id="btnCinq" type="button" onClick={eventCalculation} value="5"> 5 </button>
            </div>
            <div className="btnBox">
              <button id="btnSix" type="button" onClick={eventCalculation} value="6"> 6 </button>
            </div>
            <div className="btnBox orj">
              <button id="btnMoins" type="button" value="-" onClick={eventCalculation}> - </button>
            </div>
            <div className="btnBox">
              <button id="btnUn" onClick={eventCalculation} type="button" value="1"> 1 </button>
            </div>
            <div className="btnBox">
              <button id="btnDeux" type="button" onClick={eventCalculation} value="2"> 2 </button>
            </div>
            <div className="btnBox">
              <button id="btnTrois" type="button" onClick={eventCalculation} value="3"> 3 </button>
            </div>
            <div className="btnBox orj">
              <button id="btnPlus" type="button" onClick={eventCalculation} value="+"> + </button>
            </div>
            <div className="btnBox" id="area">
              <button id="btnZero" type="button" onClick={eventCalculation} value="0"> 0 </button>
            </div>
            <div className="btnBox">
              <button id="btnPoint" type="button" onClick={eventCalculation} value="."> . </button>
            </div>
            <div className="btnBox orj">
              <button id="btnEgal" type="button" onClick={eventCalculation} value="="> = </button>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
