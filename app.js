let sentence = document.querySelector('.sentence');
let btn = document.querySelector(".btn");

let first = ["Proszę zwrócić uwagę, że ",
 "I tak mam trzy razy mniej czasu, więc proszę pozwolić mi powiedzieć ",
  "Państwo się śmieją, ale ",
   "Ja nie potrzebowałem edukacji seksualnej żeby wiedzieć, że ",
    "No niestety ", "Gdzie leży przyczyna problemu ? Ja państwu powiem: ",
    "Państwo chyba nie wiedzą, że ",
     "Oświadczam kategorycznie: ",
    "Powtarzam: ",
    "Powiedzmy to z całą mocą: ",
    "W Polsce dzisiaj ",
"Państwo nie zdają sobie sprawy, że ",
"To ja bardzo przepraszam ",
"Otóż nie wiem czy pan wie, że ",
"Yyyy... ",
"Ja chcę powiedzieć jedną rzecz: ",
"Trzeba jasno powiedzieć, że ",
"Jak powiedział wybitny krakowianin Stanisław Lem, ",
"Proszę mnie dobrze zrozumieć: ",
"Ja chciałem państwu przypomnieć, że ",
"Niech państwo nie mają złudzeń: ",
"Powiedzmy to wyraźnie: "];

let second = ["właściciele niewolników ",
"związkowcy ",
"trockiści ",
"tak zwane dzieci kwiaty ",
"rozmaici urzędnicy ",
"federaści ",
"etatyści ",
"ci durnie i złodzieje ",
"ludzie wybrani przez meneli spod budki z piwem ",
"socjaliści bezbożni ",
"socjaliści pobożni",
"komuniści z krzyżem w zębach ",
"agenci obcych służb ",
"członkowie bandy czworga ",
"pseudo-masoni z wielkiego Wschodu Francji ",
"przdstawiciele czerwonej hołoty ",
"ci wszyscy(tfu!) geje ",
"funkcjonariusze reżymowej telewizji ",
"tak zwani ekolodzy ",
"ci wszyscy(tfu!) demokraci ",
"agenci bezpieki ",
"feminazistki "]
let third = ["po przerczytaniu Manifestu komunistycznego ",
"którymi się brzydzę ",
"których nienawidzę ",
"z okolic Gazety Wyborczej ",
"czyli taka żydokomuna",
"odkąd zniesiono karę śmierci ",
"którymi pogardzam ",
"których miejsce w normalnym kraju jest w więzieniu ",
"na polecenie Brukseli ",
"posłusznie ",
"bezmyślnie ",
"z nieprawdopodobną pogardą dla człowieka ",
"za pieniądze podatników ",
"zgodnie z idelogią LGBTQZ ",
"za wszelką cenę ",
"zupełnie bezkarny ",
"całkowicie bezczelne ",
"o poglądach na lewo od komunizmu ",
"celowo i świadomie ",
"z premedytacją ",
"od czasów Okrągłęgo Stołu ",
"w ramach postępu "];

let fourth =["udają homoseksualistów ",
"niszczą rodzinę ",
"idą do polityki ",
"zakazują góralom robienia oscypków ",
"organizują paraolimpiady ",
"wprowadzają ustrój, gdzie raz na cztery lata można wybrać sobie pana ",
"ustawiają fotoradary ",
"wprowadzają dotację ",
"wydzielają buspasy ",
"podnoszą wiek emerytalny ",
"rżną głupa ",
"odbierają dzieci rodzicom ",
"wprowadzają absurdalne przepisy ",
"umieszczają dzieci w szkołach koedukacyjnych ",
"wprowadzają parytety ",
"nawołują do podniesienia podatków ",
"próbują wyrzucić kierowców z miast ",
"próbują skłócić Polskę z Rosją ",
"głoszą brednię o globalnym ociepleniu ",
"zakazują posiadania broni ",
"nie dopuszczają prawicy do władzy ",
"uczą dzieci homoseksualizmu ",
]
let five =["żeby poddawać wszystkich tresurze ",
"bo taka ich natura ",
"bo chcą wszystko kontrolować ",
"bo nie rozumieją, że socjalizm nie działa ",
"żeby wreszcie zapanował socjalizm ",
"dokładnie tak jak tow. Janosik ",
"zamiast pozwolić ludziom zarabiać ",
"żeby wyrwać kobiety z domu ",
"bo to jest w interesie tak zwanych ludzi pracy ",
"zamiast pozwolić decydować konsumentowi ",
"żeby nie opłacało się mieć dzieci ",
"zamiast obniżyć podatki ",
"bo nie rozumieją, że selekcja naturalna jest czymś dobrym ",
"żeby mężczyźni przestali być agresywni ",
"bo dzięki temu mogą brać łapówki ",
"bo dostają za to pieniądze ",
"bo tak się uczy w państwowej szkole ",
"bo bez tego(tfu!) demokracja nie może istnieć ",
"bo głupich jest więcej, niż mądrych ",
"bo chcą tworzyć raj na ziemi ",
"bo chcą niszczyć cywilizację białego człowieka "]
let six = ["co ma zresztą tyle samo sensu, co zawody w szachach dla debili.",
"co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka.",
"i trzeba być idiotą, żeby ten system popierać.",
"ale nawet jeszcze ja dożyję normalnych czasów.",
"co dowodzi, że wyskrobano nie tych co trzeba.",
"a zwykłym ludziom wmawiają, że im coś dadzą.",
"-cóż: chcieliście (tfu!) demokracji, to macie.",
"dlatego trzeba zmienić koryto a nie świnie.",
"a wystarczałoby przestać wypłacać zasiłii.",
"podczas, gdy normalni ludzie są uważani za dziwaków.",
"co w wieku XIX po prostu, by wyśmiano.",
"dlatego w społeczeństwie jest równośc a powinno być rozwarstwienie.",
"co prowadzi Polskę do katastrofy.",
"-dlatego trzeba przywrócić normalność.",
"ale w wolnej Polsce pójdą siedzieć.",
"przez kolejne kadencje.",
"o czym się nie mówi.",
"i właśnie dlatego europa umiera.",
"ale przyjdą muzułmanie i zrobią porządek.",
"-tak samo zresztą jak za Hitlera.",
"-proszę zobaczyć, co się dzieje na Zachodzie, jeśli państwo mi nie wierzą.",
"co lat temu sto nikomu nie przyszło by nawet do głowy."
]

function getRandom(input){
return Math.floor(Math.random()*input.length)}

function getSentence(){
    let firstPart = first[getRandom(first)]
    let secondPart = second[getRandom(second)]
    let thirdPart = third[getRandom(third)]
    let fourthPart = fourth[getRandom(fourth)]
    let fivePart = five[getRandom(five)]
    let sixPart = six[getRandom(six)]
 

    let content = String(firstPart + secondPart + thirdPart + fourthPart + fivePart + sixPart);
    sentence.innerHTML = content;
    console.log(content);
}
btn.addEventListener('click',getSentence)

