const token = JSON.parse(localStorage.getItem('userToken'));
let konyvek = [];

const insert = async (konyv) => {
    const container =  document.createElement("div");
    const bg = document.createElement("div");
    const kep = document.createElement("div");
    const info = document.createElement("div");
    const title = document.createElement("h1");
    const leiras = document.createElement("p");
    const leiras2 = document.createElement("p");
    const leiras3 = document.createElement("p");
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
    container2.classList.add("flex", "justify-between", "mt-3", "items-center");
    ar.classList.add("text-lg","grow", "font-bold", "text-gray-700", "dark:text-gray-200", "md:text-xl");
    gomb.classList.add( "py-2", "px-2", "text-xs", "font-bold", "text-white", "uppercase", "transition-colors", "duration-300", "transform", "bg-gray-800", "rounded", "dark:bg-gray-700", "hover:bg-gray-700", "dark:hover:bg-gray-600", "focus:outline-none", "focus:bg-gray-700", "dark:focus:bg-gray-600");
    gomb2.classList.add("mx-2", "py-2", "px-2", "text-xs", "font-bold", "text-white", "uppercase", "transition-colors", "duration-300", "transform", "bg-gray-800", "rounded", "dark:bg-gray-700", "hover:bg-gray-700", "dark:hover:bg-gray-600", "focus:outline-none", "focus:bg-gray-700", "dark:focus:bg-gray-600");

    gomb2.addEventListener('click', function(){
            const book = {
              id: konyv.id,
              cim: konyv.cim,
              kategoria: konyv.kategoria,
              iro: konyv.iro,
              kiadasDatuma: konyv.kiadasDatuma,
              ar: 1000
            };
            if(konyvek.some(konyv => book.id === konyv.id)) return;
            konyvek.push(book);
            sessionStorage.setItem('book', JSON.stringify(konyvek));

            alert("a könyvet a kölcsönzésnél láthatja majd")
    })

    gomb.textContent ="Megtekités"
    gomb2.textContent ="Kölcsönzés"
    title.textContent = konyv.cim;
    leiras.textContent = konyv.kategoria;
    leiras2.textContent = konyv.iro;
    leiras3.textContent = konyv.kiadasDatuma;

    
    bg.appendChild(kep);
    info.appendChild(title)
    info.appendChild(leiras)
    info.appendChild(leiras2)
    info.appendChild(leiras3)

    container2.appendChild(ar)
    container2.appendChild(gomb)
    container2.appendChild(gomb2)
    info.appendChild(container2);

    bg.appendChild(info);
    container.appendChild(bg);

    return container;
}

    


const konyvlista = async () =>{
    const lista = document.querySelector("#lista")
    const response = await fetch('http://localhost:8000/konyv/all',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        
    }) 
    const {konyvek} = await response.json();
    konyvek.forEach(async (konyvek) =>{
        const inserted = await insert(konyvek)
        lista.appendChild(inserted)
        console.log(inserted)
    })
    
}

konyvlista();



// kosarGomb.addEventListener('click', () => {
//         // kosárba kéne tenni a terméket amire rányomtam
//         // nem lehet egy terméket többször belerakni a kosárba mert a kosár oldalon állitom be
//         if(kosar.some(productId => productId === product.id)) return;
//         kosar.push(product.id);
//         console.log(kosar)
//         sessionStorage.setItem('kosar', JSON.stringify(kosar));
//     });



// <div class='m-12 space-y-6 bg-orange-100 px-20 py-16 border-amber-700 border-4 rounded-3xl'>
//         <div class="flex bg-white rounded-lg shadow-lg dark:bg-gray-800 p-4">
//           <div class="w-1/5 bg-contain bg-no-repeat" style="background-image: url('./pics/book2.png')"></div>
//           <div class="w-4/5 p-4 md:p-4">
//               <h1 class="text-xl font-bold text-gray-800 dark:text-white">Könyv</h1>
//               <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">ez egy könyv</p>
//               <div class="flex justify-between mt-3 item-center">
//                   <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">100 FT</h1>
//                   <a href="keresett.html" class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Kölcsönzés</a>
//               </div>
//           </div>
//       </div>
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