
const contentdiv = document.getElementById("content");
const apiURL = 'https://restcountries.com/v3.1/all';
let newObject;
fetch(apiURL).then(response => response.json())
.then(data => {
    let country ={};
    let Cname;
    let Cflag;
    newObject = data;
    for(let i=0; i<newObject.length; i++){

        if(data[i].altSpellings[1] != undefined) Cname = data[i].altSpellings[1]
        else Cname = data[i].altSpellings[0] 
        
        if(data[i].flags.png != undefined) Cflag = data[i].flags.png
        else Cflag = data[i].flags.svg

        country['countryName'] = Cname;
        country['countryflag'] = Cflag;

        createlement(country)
    }
    console.log(newObject)
})

function createlement(country){
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const article = document.createElement('article');

    h2.innerHTML = country.countryName;
    img.src = country.countryflag;
    article.classList.add('card')

    article.appendChild(img);
    article.appendChild(h2);
    contentdiv.appendChild(article)
}