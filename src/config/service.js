const BASE_URL = "http://localhost:3001/"

let obj = {
    get (url,body) {
        const METHOD = 'get';
        return doHttpCall(url, METHOD, body);
    }
};

function doHttpCall(url, method, body={}, isLogin) {
    const promise = new Promise((resolve, reject) => {      
            let NEW_URL = BASE_URL + url;
            let options = {
                method : method
            };
            options.headers.append('Content-Type', 'application/json')
            fetch(NEW_URL, options)
            .then(res=>res.json())
            .then((response) => {
                resolve(response);
            }).catch((message)=> {
                console.log(message)
               reject(message);
            });
    });
    return promise;
}


function constructParams(params={}) {
    const keys = Object.keys(params)
    if (keys.length === 0) {
        return "";
    }
    let paramString = '?';
    for (let i = 0, ii = keys.length; i < ii; i++) {
        paramString += `${keys[i]}=${params[keys[i]]}`;
        if ( i !== ii - 1) {
            paramString += '&';
        }
    }
    return paramString;
}

export default obj;