import React, {useEffect} from 'react';

function KnjigaKartica({knjiga,dodajNaListu,ukloniSaListe,prikaziKnjigu,korpa}) {
const stil={marginRight:10+'px',}

    return (
            <div className="col">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-5 col-sm-4">
                            <img className="img-fluid w-100" src="https:/picsum.photos/id/24/4855/1803" alt="Neka slika" />
                        </div>
                        <div className="col-7 col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">{knjiga.naslov}</h5>
                                <h6 className="card-title">{knjiga.zanr}</h6>
                                <p className="card-title">{knjiga.pisac}</p>
                                {korpa===0?(knjiga.pozajmica===0?(
                                            <><button className='btn btn-primary btn-sm' onClick={()=>dodajNaListu(knjiga.id)} style={stil} >Dodaj na listu</button>
                                                <button className='btn btn-success btn-sm' onClick={()=>prikaziKnjigu(knjiga)} style={stil} >Detaljnije</button></>
                                        ):(
                                           <> <button className='btn btn-primary btn-sm' onClick={()=>ukloniSaListe(knjiga.id)} style={stil} >Ukloni</button>
                                               <button className='btn btn-success btn-sm' onClick={()=>prikaziKnjigu(knjiga)} style={stil} >Detaljnije</button></>
                                        )

                                    )
                                   :
                                    (null)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default KnjigaKartica;