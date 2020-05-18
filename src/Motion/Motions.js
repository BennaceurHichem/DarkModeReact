import React from 'react'
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "./Example";

import style from "./style.css";

export default function Motions() {
    const [count, setCount] = useState(0);

    return (
        <>
        
        <div className="example-container">
          <Example className={style.center}key={count} />

          <h1>This is a Text from The Motion Component</h1>
        </div>
      </>
    )
}
