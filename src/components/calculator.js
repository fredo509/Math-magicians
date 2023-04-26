export default function theCalculator() {
  return (
    <body>
      <header>
        <p>Math Magicians :) </p>
      </header>
      <main>
        <section>
          <div id="Myscreen">
            <input id="screen" value="0" readOnly />
          </div>
          <div id="keyboard">
            <div className="btnBox">
              <button id="btnAC" type="button"> AC </button>
            </div>
            <div className="btnBox">
              <button id="btn+/-" type="button"> +/- </button>
            </div>
            <div className="btnBox">
              <button id="btnModulo" type="button"> % </button>
            </div>
            <div className="btnBox orj">
              <button id="btnDivision" type="button"> ÷ </button>
            </div>
            <div className="btnBox">
              <button id="btnSept" type="button"> 7 </button>
            </div>
            <div className="btnBox">
              <button id="btnhuit" type="button"> 8 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnNeuf" type="button"> 9 </button>
            </div>
            <div className="btnBox orj" type="button">
              <button id="btnMul" type="button"> x </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnQuatre" type="button"> 4 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnCinq" type="button"> 5 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnSix" type="button"> 6 </button>
            </div>
            <div className="btnBox orj" type="button">
              <button id="btnCinq" type="button"> - </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnUn" type="button"> 1 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnDeux" type="button"> 2 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnTrois" type="button"> 3 </button>
            </div>
            <div className="btnBox orj" type="button">
              <button id="btnPlus" type="button"> + </button>
            </div>
            <div className="btnBox" id="area" type="button">
              <button id="btnZero" type="button"> 0 </button>
            </div>
            <div className="btnBox" type="button">
              <button id="btnPoint" type="button"> . </button>
            </div>
            <div className="btnBox orj" type="button">
              <button id="btnEgal" type="button"> = </button>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
