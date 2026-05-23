
const API_URL = 'https://jsonplaceholder.typicode.com/users';

function createUserCard(user) {
    return `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p><span class="label">Email:</span> ${user.email}</p>
            <p><span class="label">Phone:</span> ${user.phone}</p>
            <p><span class="label">City:</span> ${user.address.city}</p>
            <p><span class="label">Company:</span> ${user.company.name}</p>
        </div>
    `;
}
async function fetchUsers() {
    try{

const response = await fetch( API_URL);


if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)
}
const users = await response.json();
return users;


    } catch(error) {
         console.error('Error:' , error);
    }
}
/* medtod 1 */
async function displayUsersWithMap() {
    const container = document.getElementById('users-map');
    try {
       container.innerHTML = ' <div class="loading">Loading users...</div>'
       const userCardsHTML = user.map(user => createUserCard(user));
       container.innerHTML =  userCardsHTML.join('');
    } catch(error) {
       container.innerHTML=`<div class="loading">Loading users: ${error.message}</div>`;
    }
}


/*  Method -2 mutibility and immutibility porte hbe */
    
async function displayUsersWithEach (){
    const container = document.getElementById('users-forEach');
try {
 container.innerHTML = ' <div class="loading">Loading users...</div>';
 const users = await fetchUsers();
 container.innerHTML = '';
 users.forEach(user =>{
    const userCardsHTML = createUserCard(user);
    container.innerHTML += userCardsHTML;
 }
);
}  catch(error) {
       container.innerHTML=`<div class="Error">Error Loading users: ${error.message}</div>`;
    }
}

document.addEventListener('DOMContentLoaded' ,() => {
    console.log('Page Loaded! Fetching user data....');
    displayUsersWithMap();
    displayUsersWithEach();
});
