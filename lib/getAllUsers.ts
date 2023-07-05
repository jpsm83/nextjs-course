export default async function getAllUsers() {
    let res = await fetch ("https://jsonplaceholder.typicode.com/users");
    if(!res.ok) throw new Error("failed to fetchdata");
    return res.json();
}