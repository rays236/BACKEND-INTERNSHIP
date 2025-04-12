fetch("http://localhost:8000/", {
    method: "POST",
    body: "Hello server"
}).then(resp => resp.text()).then(console.log); // .text return text from elements in html