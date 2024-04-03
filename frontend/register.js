const regButton = document.querySelector('#register');

regButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value;
    const nev = document.querySelector('#nev').value;
    const lakcim = document.querySelector('#lakcim').value;
    const telszam = document.querySelector('#telszam').value;
    const jelszo = document.querySelector('#jelszo').value;

    const regFormData = {
        nev,
        email,
        telszam,
        lakcim,
        jelszo
    }

    console.log(regFormData);

    const response = await fetch("http://localhost:8000/kolcsonzo/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(regFormData)
    });

    const data = await response.json();

    console.log(data)
 

    // beállítjuk localstrage-ba a tokent
    localStorage.setItem("userToken", JSON.stringify(data.token));
    window.location.href = "home.html";

    
});

