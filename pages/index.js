import React, { useState, useRef } from "react";
import Barcode from "react-barcode";

export default function Home() {
  const barcodeRef = useRef(null);
  const [barcode, setBarcode] = useState("CODE128");
  const handleChange = (event) => {
    setBarcode(event.target.value ? event.target.value : "");
  };
  return (
    <div className="App">
      <h1 className="title">Restaurant Barcode Menu</h1>
      <input type="text" placeholder="type here" onChange={handleChange} />
      <Barcode
        value={barcode}
        height={90}
        width={1.5}
        fontOptions="600"
        textMargin={4}
        margin={0}
        ref={barcodeRef}
      />
    </div>
  );
}
