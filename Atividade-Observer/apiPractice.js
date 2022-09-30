import fetch from 'node-fetch'

async function getData () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

async function setData(band, music ) {
    try{
        const addMusic = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
            title: `${band}`,
            body: `${music}`,
            userId: 1,
        }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch(error) {
        console.log(error)
    }
}

getData()
setData('Codplay', 'Yellow')
getData()
