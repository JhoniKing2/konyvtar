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