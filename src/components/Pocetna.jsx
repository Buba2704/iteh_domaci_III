import React from 'react';
import KnjigaKartica from "./KnjigaKartica";

function Pocetna({knjige}) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 g-3">
            {knjige.map((knjiga)=>(
             <KnjigaKartica key={knjiga.id} knjiga={knjiga}/>
            ))}
        </div>
    );
}

export default Pocetna;