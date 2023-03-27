function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => displayData(data));
}
function displayData(data) {
    console.log(data);
}

// users post 
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then(data => console.log(data));  /// this is the way to show that at console 
        .then(data => displayPost(data));    ///  here call the function which work to show the element to show to UI 
}
function displayPost(posts) {
    const section = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div'); // create an element div 
        div.classList.add('post'); // giving an class name 
        div.innerHTML = `   //  this part is dinamic 
        // here creating  h3 and p tags  and add  element dinamic way 
        <h3>${post.title}</h3>  // post.title here check the obj which is inside the array 
        <p>${post.body}</p>
        `;
        section.appendChild(div); // add this div to section 

    }
}



// this showing users info
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}
function displayUser(data) {
    const ul = document.getElementById('users') // get the ul 
    for (const user of data) {
        const li = document.createElement('li'); // create an element 
        li.innerText = `name : ${user.name}  email:${user.email}`; // here set the innerText 
        ul.appendChild(li); /// add this  with ul to  show tha in UI
    }
}

// this is showing image by API call
function loadImage() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImage(data))
}

function displayImage(data) {
    const ul = document.getElementById('users')
    for (const imgs of data) {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = imgs.url;
        ul.appendChild(img);
    }

}