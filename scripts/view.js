import navbar from "../components/navbar.js";
import { getData } from "../components/getData.js";

document.querySelector("#navbar").innerHTML = navbar();

const homeLink = document.querySelector(".home");
const createBlog = document.querySelector(".create__blog");

const id = localStorage.getItem("id");

homeLink.addEventListener("click", () => {
  location.href = "../index.html";
});

const blogData = async (id) => {
  let res = await getData(`http://localhost:3000/blogs/${id}`);
  let title = document.createElement("h2");
  title.innerHTML = "Title : " + res.title;

  let body = document.createElement("p");
  body.innerHTML = res.body;

  let author = document.createElement("h3");
  author.innerHTML = `<em>${res.author}</em>`;

  document.querySelector("#blog").append(title, body, author);
};

blogData(id);
