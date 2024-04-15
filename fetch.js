const url = 'https://jsonplaceholder.typicode.com/albums';

// fetch(url)
// .then(response => response.json())
// .then(result => {
//     console.log(result);
//     console.log(result[0].title)
// });

async function getData(){
    let response = await fetch(url);
    let album = await response.json();
    // console.log(album);

    const body = document.getElementsByTagName('body');
    console.log(body);
    const title = document.createElement('p')
    console.log(title)
    title.innerHTML = `The song is ${album[0].title}`;
    console.log(title);
    // body.append(title)
}

getData();