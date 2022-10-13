import navbar from '../components/navbar.js'

document.querySelector('#navbar').innerHTML = navbar();

import { getData } from '../components/getData.js';

document.querySelector('#publish').addEventListener('click', async () => {
    event.preventDefault();
    let blogData = {
        title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        author: document.querySelector('#author').value,
    }

    // console.log(blogData);

    // let res = await getData(`http://localhost:3000/blogs`, {
    //     method: 'POST',
    //     body: JSON.stringify(blogData),
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
        

    // }

    let res = await fetch(`http://localhost:3000/blogs`, {
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: {
            "Content-Type": "application/json",
        }
    });
});