function DugmeKartice({tekstDugmeta,funkcija,parametarFunkcije,stil,klasName}) {

    return (
        <>
        <button className={klasName} onClick={()=>funkcija(parametarFunkcije)} style={stil} >{tekstDugmeta}</button>
        </>
    );

} 

export default DugmeKartice;