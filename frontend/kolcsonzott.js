

const token = JSON.parse(localStorage.getItem('userToken'));
let kosar = [];

const insert = async (kolcsonzesek) => {
    const kivitel = typeof kolcsonzesek.kivitel === "string" ? new Date(kolcsonzesek.kivitel).toISOString().split("T")[0] : kolcsonzesek.kivitel.toISOString().split("T")[0];
    const hatarido = typeof kolcsonzesek.hatarido === "string" ? new Date(kolcsonzesek.hatarido).toISOString().split("T")[0] : kolcsonzesek.hatarido.toISOString().split("T")[0];


    const container =  document.createElement("div");
    const bg = document.createElement("div");
    const kep = document.createElement("div");
    const info = document.createElement("div");
    const title = document.createElement("h1");
    const leiras = document.createElement("p");
    const leiras2 = document.createElement("p");
    const leiras3 = document.createElement("p");
    const leiras4 = document.createElement("p");
    const leiras5 = document.createElement("p");
    const container2 = document.createElement("div");
    const ar = document.createElement("h1");
    const gomb = document.createElement("a");
    const gomb2 = document.createElement("button");

    container.classList.add("m-12", "space-y-6", "bg-orange-100", "px-20", "py-16", "border-amber-700", "border-4", "rounded-3xl");
    bg.classList.add("flex", "bg-white", "rounded-lg", "shadow-lg", "dark:bg-gray-800", "p-4");
    kep.classList.add("w-1/5", "bg-contain", "bg-no-repeat", "bg-[url('./pics/book2.png')]");
    info.classList.add("w-4/5", "p-4", "md:p-4");
    title.classList.add("text-xl", "font-bold", "text-gray-800", "dark:text-white");
    leiras.classList.add("mt-2", "text-sm", "text-gray-600", "dark:text-gray-400");
    leiras2.classList.add("mt-2", "text-sm", "text-gray-600", "dark:text-gray-400");
    leiras3.classList.add("mt-2", "text-sm", "text-gray-600", "dark:text-gray-400");
    leiras4.classList.add("mt-2", "text-sm", "text-gray-600", "dark:text-gray-400");
    leiras5.classList.add("mt-2", "text-sm", "text-gray-600", "dark:text-gray-400");



    title.textContent = kolcsonzesek.konyv.cim;
    leiras.textContent = kolcsonzesek.konyv.kategoria;
    leiras2.textContent = kolcsonzesek.konyv.iro;
    leiras3.textContent = kolcsonzesek.konyv.kiadasDatuma;
    leiras4.textContent = kivitel;
    leiras5.textContent = hatarido;

    
    bg.appendChild(kep);
    info.appendChild(title)
    info.appendChild(leiras)
    info.appendChild(leiras2)
    info.appendChild(leiras3)
    info.appendChild(leiras4)
    info.appendChild(leiras5)

    container2.appendChild(ar)
    container2.appendChild(gomb)
    container2.appendChild(gomb2)
    info.appendChild(container2);

    bg.appendChild(info);
    container.appendChild(bg);



    return container;
}

const kolcsonzeslista = async () =>{
    const lista = document.querySelector("#lista")
    const response = await fetch('http://localhost:8000/kolcsonzesek/kolcsonzeseim',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        
    })
    console.log(response) 
    const kolcsonzesek = await response.json();
    console.log(kolcsonzesek);

    kolcsonzesek.kolcsonzesek.forEach(async (kolcsonzesek) =>{
        const inserted = await insert(kolcsonzesek)
        lista.appendChild(inserted)
    })
    
}

kolcsonzeslista();

const username = document.querySelector('#username');
const logoutButton = document.querySelector('#logout');
let kolcsonzo;

window.onload = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));

    if (!token || token === undefined) {
        window.location.href = "login.html";
    }

    const response = await fetch('http://localhost:8000/kolcsonzo/me',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json();
    username.textContent = data.nev
}

logout.addEventListener('click', () => {
    localStorage.removeItem("userToken");
    window.location.href = "login.html";
})