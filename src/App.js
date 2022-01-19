import logo from './logo.svg';
import './App.css';
import Navigacija from "./components/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Pocetna from "./components/Pocetna";

function App() {

    const [knjige,setKnjige]=useState([
        {
            "id": 1,
            "naslov": "Ana Karenjina",
            "pisac": "Lav Nikolajevič Tolstoj",
            "opis":"„Najbolja knjiga svih vremena.“ Washington Post\n" +
                "\n" +
                "Sve srećne porodice liče jedna na drugu, svaka nesrećna porodica nesrećna je na svoj način.\n" +
                "\n" +
                "Roman koji je Fjodor Dostojevski smatrao besprekornim, a Vilijam Fokner nazvao najboljim romanom koji je ikada napisan, Ana Karenjina je monumentalno delo Lava Tolstoja koji daje sveobuhvatan prikaz ruskog društva devetnaestog veka, od aristokratskih salona do seoskih gazdinstava. Uvodeći dva narativna toka, prvi koji prati ljubavnu priču između Ane i Vronskog i drugi koji prati odnos između Kiti i Ljevina, Lav Tolstoj ispisuje svevremene stranice o porodici, gubitku, ljubavi, izdaji, veri i prijateljstvu.\n" +
                "\n" +
                "„U Ani Karenjini Tolstoj je dao izuzetnu psihološku analizu ljudske duše, vrlo duboko i snažno, s realizmom umetničkog opisivanja koji dosad nismo imali.“ Fjodor Dostojevski\n" +
                "\n" +
                "„Najveći društveni roman čitave svetske književnosti.“ Tomas Man\n" +
                "\n" +
                "„Jedna od najvećih ljubavnih priča u svetskoj književnosti.“ Vladimir Nabokov"
        },
        {
            "id": 2,
            "naslov": "Gorski vijenac",
            "pisac": "Petar Petrović Njegoš",
            "opis":"Oko jednog događaja nevelikih razmera i neprivlačnog za pesničku obradu, kakva je bila istraga poturica, Njegoš (1813-1851) je u svom pesničkom vencu ispleo čitavu crnogorsku istoriju, opevao najvažnije događaje iz prošlosti, od vremena Nemanjića do početka XVIII veka, naslikao svakodnevni život Crnogoraca, njihove praznike i skupove, opisao narodne običaje, verovanja i shvatanja. To je pesnička enciklopedija u kojoj su obuhvaćene sve pesničke forme i svi vidovi crnogorske stvarnosti i istorije. On spada u one izuzetne pesničke tvorevine u koje kao da se sleglo sveukupno iskustvo, istorijsko, pesničko i filozofsko, čitavih epoha u životu pojedinih naroda i civilizacija. Gorski vijenac je veliko delo koje se čitalo i proučavalo, bilo široko poznato u narodu, pojedine stihove ili veće celine iz njega znali su i ljudi bez ikakvog književnog obrazovanja, pa čak i nepismeni... Ovaj ep spada u one izuzetne tvorevine poezije u koje kao da se sleglo sveokupno iskustvo, filosofsko i pesnicko, čitavih epoha u zivotu pojedinih naroda i civilizacija."
        },
        {
            "id": 3,
            "naslov": "Nečista krv",
            "pisac": "Borisav Stanković",
            "opis":"Predvodnik epohe moderne srpske proze i psihološkog romana.\n" +
                "\n" +
                "U priči o stradanju čuvene vranjanske lepotice Sofke, prvi put u našoj književnosti, spoljašnji svet se uspostavlja kao suptilni odraz čulne uznemirenosti, intimnih doživljaja, slutnji i podsvesnih zbivanja jedne žene – izuzetne koliko lepotom toliko i snažnom samosvešću. Prvi put žensko i muško telo, erotske žudnje i seksualna htenja dobijaju prvorazredni književni značaj, a likovi žestokog temperamenta, orijentalno egzotični, određeni arhaičnim jezikom i kulturom, rastrzani između svojih nagona i društveno nametnutog postojanja, postaju tragične univerzalne figure u kojima prepoznajemo večne protivrečnosti postojanja.\n" +
                "\n" +
                "U toj čudesnoj književnoj formi koja je uspostavila harmoniju između lokalnog, zaboravljenog i specifičnog s jedne strane, i opšteg i u svim vremenima prepoznatljivog čovekovog stradanja s druge strane, treba tražiti odgovor na pitanje zašto Nečista krv, iako jedini završeni roman Borisava Stankovića, svom autoru i danas čuva status jednog od najvećih srpskih romanopisaca."
        },
        {
            "id": 4,
            "naslov": "Teslina pošiljka",
            "pisac": "Vanja Bulić",
            "opis":"Neke tajne treba zauvek da ostanu daleko od očiju.\n" +
                "\n" +
                "Kad knjiga izgori, pepeo progovori.\n" +
                "\n" +
                "Na ruševinama Narodne biblioteke, uništene tokom bombardovanja Beograda 6. aprila 1941. godine, jednog jutra pronađeno je telo nemačkog novinara Riharda Genca. Taj događaj označiće početak potere za ubicom koja će novinara Novaka Ivanovića uvesti u lavirint laži, obmana, obaveštajnih intriga, istorijskih nepravdi, međunarodnih zavera... A na samom kraju tog lavirinta čeka šokantna istina.\n" +
                "\n" +
                "Posle serije ubistava i otmica, na prvi pogled međusobno nepovezanih, Novaku postaje jasno da je postao pion u igri moćnika čiji je jedini cilj pronalaženje Teslinih „zraka smrti“. Tesla je tvrdio da je taj pronalazak namenio svojoj otadžbini. Da li je pronalazak uoči rata stigao u Srbiju i da li se nalazio baš u Narodnoj biblioteci, čija je celokupna arhiva trebalo da bude izmeštena u manastir Blagoveštenje? U toj arhivi se nalazilo i Miroslavljevo jevanđelje, ali ga je neko uoči bombardovanja sakrio u manastir Raču. Da li su tada sklonjeni i Teslini pronalasci?\n" +
                "\n" +
                "Novak shvata da svi putevi vode u manastir Blagoveštenje, gde živi sveti čovek koji može biti ključ za rešenje zagonetke.\n" +
                "\n" +
                "Gore, u vrletima koje vekovima šibaju vetrovi i gde je vreme stalo, sačekaće ga jedan monah, jedan orao i jedan vuk.\n" +
                "\n" +
                "U dodatku ovog, posebnog izdanja romana Teslina pošiljka Vanja Bulić nudi malo poznate podatke koji se nisu uklapali u literarnu priču, a govore o novijoj istoriji Narodne biblioteke i intrigantnim pojedinostima iz života Nikole Tesle. Čitalac će biti u prilici da sazna i priču o manastirima u Srpskoj Svetoj gori, u Ovčarsko-kablarskoj klisuri, gde je smešten u Manastir Blagoveštenje, jedna od ključnih lokacija u romanu."
        },
        {
            "id": 5,
            "naslov": "Zidanje ambisa",
            "pisac": "Branislav Janković",
            "opis":"Neki ambisi postoje, a neke sami stvorimo.\n" +
                "\n" +
                "U manastirskoj tami Visokih Dečana, skriven visoko na kapitelu jednog stuba, vekovima stoji tajanstveni potpis Srđ grešni. Odoleva vremenu, krijući u sebi greh nepoznatog neimara. Ovo je priča o tom grehu.\n" +
                "\n" +
                "Veliki kralj Stefan Uroš III Nemanjić, kome je božjim čudom vraćen vid, počinje 1327. godine da gradi zadužbinu – manastir Dečani.\n" +
                "\n" +
                "Dok se smenjuju glasovi trojice junaka – glavnog neimara franjevca Vite Kotoranina, mladog klesara Srđa iz Hilandara i paganina bunardžije Vidoja – senka nečeg strašnog nadviće se nad kamenim zidovima tek započete Crkve Svetog Spasa, senka bolesti protiv koje nema dobrog oružja.\n" +
                "\n" +
                "Trojica junaka kreću na strašnog neprijatelja – da pobede ili da nestanu. U tome će im pomoći čudni, slepi prosjak i jedna pesma. A pre svega zavet njihovog prijateljstva.\n" +
                "\n" +
                "Izvanredno satkana priča sa poetskim nabojem, Zidanje ambisa je roman o burnim vremenima, malim ljudima, jakim ženama, vladarima, oceubicama i slepim svecima... i o velikoj ljubavi."
        },
    ]);


  return (
    <BrowserRouter>
        <Navigacija/>
        <Routes>
            <Route path='/' element={<Pocetna knjige={knjige}/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
