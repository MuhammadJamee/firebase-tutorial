const userId = document.getElementById("userId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");

const database = firebase.database();
const usersRef = database.ref("/users");
addBtn.addEventListener("click", (e) => {
e.preventDefault();
const newData = {
first_name: firstName.value,
last_name: lastName.value,
age: age.value,
};
const autoId = usersRef.push().key;
const updates = {};
updates["/users/" + autoId] = newData;
// updates["/super-users/" + autoId] = newData;
database.ref().update(updates);
});

removeBtn.addEventListener("click", (e) => {
e.preventDefault();
const newData = {
first_name: firstName.value,
last_name: lastName.value,
age: age.value,
};
const autoId = usersRef.push().key;
const updates = {};
updates["/users/"] = null;
// updates["/super-users/" + autoId] = newData;
database.ref().update(updates);
});

updateBtn.addEventListener("click", (e) => {
e.preventDefault();
const newData = {
first_name: firstName.value,
last_name: lastName.value,
age: age.value,
};
const autoId = usersRef.push().key;
const updates = {};
updates["/users/" + userId.value] = newData;
database.ref().update(updates);
});

var reflectionDiv = document.getElementById("realtimedb");

database.ref("/users").on('value', (snap) => {
reflectionDiv.innerHTML = JSON.stringify(snap.val())
console.log(snap.val())
})