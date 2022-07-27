const main = document.getElementById("main");
const url = `https://protected-taiga-89091.herokuapp.com/api/card`;

fetch(url)
.then((resp)=> resp.json())
.then((data)=> printData(data.data))
.catch((error)=>{
    return console.log(error)
})

const printData = (arr) => { 
    console.log(arr)
    let str = '';
    for(let i = 0; i < arr.length -6 ; i++){
        const cardNumber = arr[i].cardNumber;
        const spanishName = arr[i].spanishName;
        const englishName = arr[i].englishName;
        const meaning = arr[i].meaning;
        const Rōmaji = arr[i].Rōmaji;
        const sakuraCard = arr[i].sakuraCard;
        str = str + ` 
        <div class="tarjeta">
            
            <figure>
                <img src="${sakuraCard}" alt="${spanishName}">
            </figure>
        
            <div class="personaje">
                <p>
                    ${cardNumber}
                </p>
                <p>
                    ${spanishName}
                </p>
                <p>
                    ${englishName}
                </p>
                <p>
                    ${meaning}
                </p>
                <p>
                ${Rōmaji}
            </p>
            </div>
        </div>
        `
    }
    main.innerHTML = str;
}
