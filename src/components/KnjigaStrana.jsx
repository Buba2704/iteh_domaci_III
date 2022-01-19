import React from 'react';
import {Link} from "react-router-dom";

function KnjigaStrana({knjiga}) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{knjiga.naslov}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{knjiga.pisac}</h6>
                <p className="card-subtitle mb-2 text-muted">{knjiga.zanr}</p>
                <p className="card-text">{knjiga.opis}</p>
                <Link to="/" className="card-link">Vrati se</Link>
            </div>
        </div>
    );
}

export default KnjigaStrana;