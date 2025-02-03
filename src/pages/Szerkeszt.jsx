import React, { useState } from 'react';
import { useEffect } from 'react'

export default function Szerkeszt() {

    const [uditok,setUditok] = useState([]);
    const [refresh,setRefresh] = useState(false);
    const [nev,setNev] = useState('');
    const [meret,setMeret] = useState('');
    const [kep,setKep] = useState('');

     useEffect(() => {
        async function getUditok() {
            const resp = await fetch('http://localhost:88/uditok');
            const json = await resp.json();
            setUditok(json);
        }
        getUditok();
    },[refresh]);

    async function delUdito(uaz) {
        await fetch('http://localhost:88/udito/' + uaz, {
            method: 'DELETE'
        });
        setRefresh(!refresh);
    }

    async function addUdito() {
        await fetch('http://localhost:88/udito', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nev:nev,meret:meret,kep:kep})
        });
        setRefresh(!refresh);
    }
  return (
    <div>
        <div className='add-container'> 
            <input type="text" placeholder='Név' value={nev} onChange={e => setNev(e.target.value)}/>
            <input type="text" placeholder='Méret' value={meret} onChange={e => setMeret(e.target.value)}/>
            <input type="text" placeholder='Kép' value={kep} onChange={e => setKep(e.target.value)}/>
            <input type="button" value="Hozzáad" onClick={addUdito} />
        </div>
    <div>
        {uditok.map(x => <div className='container' key={x.uaz}><div className='listaelem' key={x.uaz}> {x.nev} ({x.meret} Liter)</div><span onClick={() => delUdito(x.uaz)}>X</span></div>)}
    </div>
    </div>
  )
}
