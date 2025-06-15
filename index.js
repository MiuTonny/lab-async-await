// Write your code here!

//step 1 fetch posts from API

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Step 2 Display the posts

function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    posts.forEach(post => { //create li
        const li = document.createElement("li");

        const h1 = document.createElement("h1") //create h1
        h1.textContent = post.title;

        //create p and set body
        const p = document.createElement("p");
        p.textContent = post.body;

        //append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        //append li to ul
        postList.appendChild(li);
    });
}

//call function
getPosts();