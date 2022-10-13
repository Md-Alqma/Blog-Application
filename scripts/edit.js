import navbar from '../components/navbar.js'

document.querySelector('#navbar').innerHTML = navbar();

import { getData } from '../components/getData.js';

const id = localStorage.getItem('id');

// console.log(id);

const blog = async (id) => {
    let res = await getData(`http://localhost:3000/blogs/${id}`);

    document.querySelector('#title').value = res.title;
    document.querySelector('#body').value = res.body;
    document.querySelector('#author').value = res.author;
}

document.querySelector('#publish').addEventListener('click', async () => {
    event.preventDefault();
    let blogUpdatedData = {
        title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        author: document.querySelector('#author').value,
    }

    await fetch(`http://localhost:3000/blogs/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(blogUpdatedData),
        headers: {
            "Content-Type": "application/json",
        }
    })

    location.href = '../index.html';
})


blog(id);