import React from 'react';
import KnjigaKartica from "./KnjigaKartica";
import {useNavigate} from "react-router-dom";

function Pocetna({knjige,dodajNaListu,ukloniSaListe,setKnjigaStrana}) {

    let navigate = useNavigate();
    function prikaziKnjigu(knjiga){

        setKnjigaStrana(knjiga);

        navigate('/knjiga');
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 g-3">
            {knjige.map((knjiga)=>(
             <KnjigaKartica key={knjiga.id}
                            knjiga={knjiga}
                            dodajNaListu={dodajNaListu}
                            prikaziKnjigu={prikaziKnjigu}
                            ukloniSaListe={ukloniSaListe}
                            korpa={0}/>
            ))}
        </div>
    );
}

export default Pocetna;