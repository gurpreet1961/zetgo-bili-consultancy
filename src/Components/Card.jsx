import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
function Card() {
  const [classname, setclassname] = useState("guestExpandnone");
  const [adult, setAdult] = useState("1 adult");

  const changeClass = () => {
    setclassname("guestExpand");
  };
  const [valueAdult, setValueAdult] = useState(1);
  const [valueChild, setValueChild] = useState(0);
  const clickminus = () => {
    if (valueAdult > 1) {
      setValueAdult(valueAdult - 1);
      valuechange();
    }
  };
  const clickadd = () => {
    if (valueAdult < 2) {
      setValueAdult(valueAdult + 1);
      valuechange();
    }
  };
  const clickchildminus = () => {
    if (valueChild > 0) {
      setValueChild(valueChild - 1);
      valuechange();
    }
  };
  const clickchildadd = () => {
    if (valueChild < 2) {
      setValueChild(valueChild + 1);
      valuechange();
    }
  };
  const valuechange = () => {
    if (valueChild != 0) {
      const a = valueAdult + " adult" + ", " + valueChild + " Child";
      setAdult(a);
    } else {
      const a = valueAdult + " adult";
      setAdult(a);
    }
  };
  return (
    <>
      <div className="card">
        <div className="cardUpper">
          <div className="checkin">
            <h2>Check-in</h2>
            <div className="datepick">
              <input type="date" placeholder="Add date" />
              <span class="material-icons-outlined">expand_more</span>
            </div>
          </div>
          <div className="checkout">
            <h2>Check-out</h2>
            <div className="datepick">
              <input type="date" placeholder="Add date" />
              <span class="material-icons-outlined">expand_more</span>
            </div>
          </div>
        </div>
        <div className="cardlower" onClick={changeClass}>
          <div className="guest">
            <h2>Guests</h2>
            <p>{adult}</p>
          </div>
          <div className={classname}>
            <div>
              <h2>Adult</h2>
              <div className="adds">
                <button className="minus" onClick={clickminus}>
                  -
                </button>
                <span>{valueAdult}</span>
                <button className="add" onClick={clickadd}>
                  +
                </button>
              </div>
            </div>
            <div>
              <h2>Children</h2>
              <div className="adds">
                <button className="minus" onClick={clickchildminus}>
                  -
                </button>
                <span>{valueChild}</span>
                <button className="add" onClick={clickchildadd}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="btnDiv">
            <button className="btnSearch">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
