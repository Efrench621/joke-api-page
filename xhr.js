
const start = document.getElementById('start');
const end = document.getElementById('end')

// Step 1
let xhrStart = new XMLHttpRequest();
let xhrEnd = new XMLHttpRequest();

// Step 4
xhrStart.onreadystatechange = e =>{
    if(xhrStart.readyState === 4)
    {
        if(xhrStart.status === 200){
            const data = JSON.parse(xhrStart.response);
            start.innerHTML = data.setup;
            console.log(data);
        }
    }
}

xhrEnd.onreadystatechange = e =>{
    if(xhrEnd.readyState === 4)
    {
        if(xhrEnd.status === 200){
            const data = JSON.parse(xhrEnd.response);
            end.innerHTML = data.punchline;
            console.log(data);
        }
    }
}

// Step 2
xhrStart.open('GET', 'https://official-joke-api.appspot.com/jokes/random');
xhrEnd.open('GET', 'https://official-joke-api.appspot.com/jokes/random')

// Step 3
xhrStart.send();
xhrEnd.send();
