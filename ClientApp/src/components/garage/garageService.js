const _url = "https://localhost:5001/api/";
const _headers = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        Authorization: "Bearer " + localStorage.getItem('auth_token'),
        "Content-Type": "application/json",
    }
}
// https://localhost:5001/api/user/register
class garageService {
    getGarages() {
        fetch(`${_url}garage/all`,{_headers})
        .then((data) => data.json());
    }
    getGarage(id) {
        return fetch(`${_url}garage/${id}`,{_headers})
            .then((data) => data.json());
    }
    addGarage() { }
    getJobs(id) {
        return fetch(`${_url}jobs/${id}`,{_headers})
            .then((data) => data.json());
    }
    addJob() { }

}


export default garageService;