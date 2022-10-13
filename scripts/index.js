import navbar from "../components/navbar.js";

document.querySelector('#navbar').innerHTML = navbar();

import {
    getData
} from "../components/getData.js";

// getData();

// let url = '';

const initialFunc = async () => {
    // console.log('Initializing...');
    let data = await getData(`http://localhost:3000/blogs`);
    // console.log(data);
    appendData(data);
}

initialFunc();

const appendData = async (data) => {
    data.forEach((el) => {
        let tr = document.createElement('tr');

        let id = document.createElement('td');
        id.innerHTML = el.id;

        let title = document.createElement('td');
        title.innerHTML = el.title;

        let author = document.createElement('td');
        author.innerHTML = el.author;

        let view = document.createElement('td');
        view.innerHTML = `<button>VIEW</button>`;
        view.onclick = () => {
            location.href = './pages/view.html';
            localStorage.setItem('id', el.id);
        }


        let edit = document.createElement('td');
        edit.innerHTML = `<button>EDIT</button>`;
        edit.onclick = () => {
            location.href = "./pages/edit.html";
            localStorage.setItem('id', el.id);
        }

        let deleteBtn = document.createElement('td');
        deleteBtn.innerHTML = `<button>DELETE</button>`;
        deleteBtn.onclick = async () => {
            await fetch(`http://localhost:3000/blogs/${el.id}`, {
                method: 'DELETE',
            });
        }

        tr.append(id, title, author, view, edit, deleteBtn);

        document.querySelector('#tBody').append(tr);
    });
}