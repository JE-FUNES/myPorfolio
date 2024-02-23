import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import "./Clock.css";

function Clock() {
  const [displayStr, setDisplayStr] = useState("");
  const [showDivEffect, setShowDivEffect] = useState(true);

  const updateTimeAndDate = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    let amPm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    let timeStr = hours.toString().padStart(2, "0") + minutes;
    if (timeStr.startsWith("0")) {
      timeStr = " " + timeStr.slice(1);
    }
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear().toString().slice(-2);
    if (month.startsWith("0")) {
      month = " " + month.slice(1);
    }
    if (day.startsWith("0")) {
      day = " " + day.slice(1);
    }

    const newDisplayStr = timeStr + " " + amPm + " " + day + month + year;

    setDisplayStr(newDisplayStr);
  };

  useEffect(() => {
    updateTimeAndDate();
    const intervalId = setInterval(updateTimeAndDate, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = () => {
    setShowDivEffect(true);
    const clock = document.querySelector(".clock");
    if (clock) {
      clock.classList.toggle("off");
    }
  };
  
  const manejarClickBoton = () => {
    setShowDivEffect(false);
    const reloj = document.querySelector(".clock");
    if (reloj) {
      reloj.classList.toggle("off");
    }
  };

  return (
    <>
    <div id="clockTailwind" style={{height: "750px", marginTop: "-62px", marginBottom: "-65px"}} >
      <svg id="noise-svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect id="noise-rect" filter="url(#noiseFilter)" />
      </svg>

      <div className="clock off">
        <div className="shadow"></div>

        <div className="base-container">
          <div className="base">
            <div></div>
            
          </div>
        </div>
        <div className="small-outer-pipe">
          <div className="small-inner-pipe"></div>
        </div>
        <div className="outer-pipe">
          <div className="inner-pipe"></div>
        </div>
        <div className="pipe-accents">
          <div className="top-tube"></div>
          <div className="tube-holders">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="top"></div>
          <div className="topinset"></div>
          <div className="left">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="right">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
        </div>

        <div className="display">
          <div className="row">
            <div className="col">
              <div>0</div>
              <div id="char01">{displayStr[0]}</div>
              <div id="char02">{displayStr[0]}</div>
            </div>
            <div className="col">
              <div>0</div>
              <div id="char11"></div>
              <div id="char12">{displayStr[1]}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>0</div>
              <div id="char21"></div>
              <div id="char22">{displayStr[2]}</div>
            </div>
            <div className="col">
              <div>0</div>
              <div id="char31"></div>
              <div id="char32">{displayStr[3]}</div>
            </div>
          </div>
          <div style={{ height: "0.2em" }}></div>
          <div className="small-row">
            <div className="row">
              <div className="col">
                <div>0</div>
                <div id="char41"></div>
                <div id="char42">{displayStr[5]}</div>
              </div>
              <div className="col">
                <div>0</div>
                <div id="char51"></div>
                <div id="char52">{displayStr[6]}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>0</div>
              <div id="char61">J</div>
              <div id="char62">J</div>
            </div>
            <div className="col">
              <div>0</div>
              <div id="char71"></div>
              <div id="char72">E</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>0</div>
              <div id="char81"></div>
              <div id="char82">F</div>
            </div>
            <div className="col">
              <div>0</div>
              <div id="char91"></div>
              <div id="char92">A</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>0</div>
              <div id="char101"></div>
              <div id="char102">{displayStr[12]}</div>
            </div>
            <div className="col">
              <div>0</div>
              <div id="char111"></div>
              <div id="char112">{displayStr[13]}</div>
            </div>
          </div>
        </div>

        <div className="glass-tube"></div>
        <div className="hex">
          <div className="overlay"></div>
        </div>

        <div className="tube-base-container">
          <div className="wires">
            <div></div>
            <div></div>
          </div>
          <div className="tube-base"></div>
          <div className="rods">
            <div className="left-rod"></div>
            <div className="center-rod"></div>
            <div className="right-rod"></div>
          </div>
          <div className="tube-btm"></div>
        </div>

        <div className="power-cord">
          <div></div>
          <div></div>
        </div>

        <div className="button" onClick={manejarClickBoton}>
          <div></div>
        </div>
      </div>

      <div className="button" onClick={handleButtonClick}>
        <div></div>
        
      </div>
    </div>
    <div className="flex flex-nowrap mt-5 mb-5 items-center justify-center">
        {showDivEffect ? ( // Renderiza el texto del reloj si showClockEffect es verdadero
          <>
            <span className="text-purple-500 text-2xl">CLOCK EFFECT: </span>
            <FaArrowUp className="w-5 h-5 mx-2 text-fuchsia-300" />
            <span className="text-fuchsia-500 font-bold">Press Button</span>
          </>
        ) : ( // Renderiza el nuevo contenido si showClockEffect es falso
          <div className="flex flex-nowrap mt-0 mb-5 items-center justify-center">
            <span className="text-fuchsia-500 text-2xl">HTML</span>
            <FaPlus className="w-5 h-5 mx-2 text-fuchsia-300" />
            <span className="text-white text-2xl">JAVA SCRIPT</span>
            <FaPlus className="w-5 h-5 mx-2 text-fuchsia-300" />
            <span className="text-fuchsia-500 text-2xl">CSS</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Clock;
