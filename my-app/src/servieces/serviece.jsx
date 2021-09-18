//GET
export const getItems = async (params) => {
    const { page } = params;
    const api_key = 'uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7';
    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${api_key}&page=${page}&limit=20&offset=${page}`);
    const data = await response.json();
    return data;
}
