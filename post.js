function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPost(posts))
}
function displayPost(posts) {
    const section = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title}</h3>
        <p> </br>${post.body}</p>
        `;
        section.appendChild(div);
    }
}

// PP for  post 
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'this is my post',
            userID: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
