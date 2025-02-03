import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Uditok() {

    const [uditok,setUditok] = useState([]);

    useEffect(() => {
        async function getUditok() {
            const resp = await fetch('http://localhost:88/uditok');
            const json = await resp.json();
            setUditok(json);
        }
        getUditok();
    },[]);

  return (
    <div className='udito-container'>
        {uditok.map(x => <div className='udito' key={x.uaz}> <img src={x.kep}/> {x.nev} ({x.meret} Liter)</div>)}
    </div>
  )
}
