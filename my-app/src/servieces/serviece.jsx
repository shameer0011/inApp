//GET
export const getItems = async () => {
    const api_key = 'uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7';
    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${api_key}`);
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

