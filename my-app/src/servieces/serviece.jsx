//GET
export const getItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/100');
    const data = await response.json();
    return data;
}

//POST
export const postItem = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: data.title, body: data.body, userId: data.userid })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log('response: ' + JSON.stringify(json));
        })
        .catch(error => {
            console.log(error, "errorss")
        })
}

