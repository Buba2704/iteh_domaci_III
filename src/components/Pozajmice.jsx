import React from 'react';
import KnjigaKartica from "./KnjigaKartica";

function Pozajmice({knjige}) {
    const stil={width:50+'vw', marginLeft:'auto',marginRight:'auto'}
    return (
        <div style={stil}>
            <h3>Knjige za pozajmicu</h3>
            {knjige.map((knjiga)=>(
               <div key={knjiga.id} style={{marginTop: 20 + "px"}}>
                   <KnjigaKartica
                                  knjiga={knjiga}
                                  dodajNaListu={()=>{}}
                                  prikaziKnjigu={()=>{}}
                                  ukloniSaListe={()=>{}}/>
               </div>
            ))}
        </div>
        )
}

export default Pozajmice;