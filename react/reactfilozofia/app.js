const btn = document.createElement('button');
btn.onclick = function()
{
    alert("Ez egy natív kód");
}

btn.innerHTML = "Natív gomb";
document.getElementById('nativ-button-container').appendChild(btn);

const btn2 = document.createElement('button');
btn2.onclick = function()
{
    alert("Ez egy react kód");
}

btn2.innerHTML = "React gomb";
document.getElementById('react-button-container').appendChild(btn2);