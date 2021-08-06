const card = document.querySelector(".card-content");

var data = document.querySelector(".data");
data.addEventListener("submit", e=>{
    e.preventDefault();
    document.querySelectorAll('.section').forEach(temp => {
        temp.remove();
    });

    var ei = document.querySelector("#numview").value;
    var choice = parseInt(ei,10);

    switch(choice){
            case 1:
                var num = document.querySelector("#num").value;
                var url = `https://numbersapi.com/${num}?json`;
                console.log(num);
                break;
            case 2:
                var day = document.querySelector("#day").value;
                var month = document.querySelector("#month").value;
                var url = `https://numbersapi.com/${month}/${day}/date?json`;
                console.log(day);
                console.log(month);
                break;
            case 3:
                var num = document.querySelector("#num").value;
                var url = `https://numbersapi.com/${num}/math?json`;
                console.log(num);
                break;
            default:
                var url = `https://numbersapi.com/random/year?json`;
    }

    console.log(url);
    getDataFromAPI(url);
});


//function for fetching the data from API
function getDataFromAPI(url){
    async function fetchData(){
        try{
            let response = await fetch(url);
            let data = await response.json();

            //add the text in the DOM
            const factholder = document.createElement("p");
            factholder.classList.add("section");
            factholder.innerHTML = `<b>${data.text}</b>`;

            card.appendChild(factholder);

            document.querySelectorAll(".digits").forEach(temp => temp.value = "");
        } catch(error){
            console.log(error);
        }
    }

    fetchData();
}

function show(){
    document.querySelectorAll('.section').forEach(temp => {
        temp.remove();
    });

    var ei = document.querySelector("#numview").value;
    var e = parseInt(ei,10);
    console.log(`hi ${e}`);

    const row = document.createElement("div");
    row.classList.add("row");

    const inputholder = document.createElement("div");
    inputholder.classList.add("input-field", "col", "s6", "offset-s3");

    switch(e){
        case 1:
            inputholder.innerHTML = `
                <input placeholder="Enter a number" class="digits" id="num" type="number" class="validate">`;
            break;
        case 2:
            inputholder.innerHTML = `
            <input placeholder="Enter Day" class="digits" id="day" type="number" class="validate">
            <input placeholder="Enter Month" class="digits" id="month" type="number" class="validate">`;
            break;
        case 3:
            inputholder.innerHTML = `
                <input placeholder="Enter a number" class="digits" id="num" type="number" class="validate">`;
            break;
        default:
            console.log("shit");
    }

    row.appendChild(inputholder);

    //replacing the dummy div with the newly created row div
    card.replaceChild(row, card.childNodes[5]);
}

