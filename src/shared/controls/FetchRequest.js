async function FetchRequest(url = '', data = {}, method) {
    // Default options are marked with *
    let config = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
    if (method == 'POST') {
        config['body'] = JSON.stringify(data)
    }
    console.log('config: ', data, config)
    const response = await fetch(url, config);
    if (response.status == 200)
        return response.json(); // parses JSON response into native JavaScript objects
    else
        return []
}

export default FetchRequest