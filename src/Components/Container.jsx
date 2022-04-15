import React from "react";
import Card from "./Card";

function Container() {
  return (
    <>
      <div className="container">
        {/* <div> */}
        <h1>Zetgo — amazing hostel for the free spirited traveler</h1>
        <p>
          Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta
          nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
        </p>
        {/* </div> */}
        <Card />
      </div>
    </>
  );
}

export default Container;
