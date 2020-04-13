export default function (...params) {
    const API = params[0];
    let data = "?";

    if (params[1]) {
        for (let key in params[1]) {
            data = `${data}${key}=${params[1][key]}&`;
        }
    }

    const URL = `${API}${data}`;
    //console.log(URL);
    return fetch(URL);
}
