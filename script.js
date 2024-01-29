const user = [
    {
        name: "arjun",
        age: 17
    },
    {
        name: "nawal",
        age: 17
    },
    {
        name: "nafa",
        age: 17
    }
];
function pushPost(element, callback) {
    setTimeout(() => {
        user.push(element);
        callback();
    }, 1800);
}

function getUser() {
    setTimeout(() => {
        user.forEach(element => console.log(element));
    }, 1500);
}

const newUser = {
    name: "Asing",
    age : 9
}

pushPost(newUser, getUser);
// getUser();
