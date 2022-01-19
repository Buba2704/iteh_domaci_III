import React from 'react';

function KnjigaKartica({knjiga}) {
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
                                <h6 className="card-title">{knjiga.pisac}</h6>
                                <p className="card-text">{knjiga.opis}</p>
                                <button className='btn btn-primary' type='button'>Dodaj na listu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default KnjigaKartica;