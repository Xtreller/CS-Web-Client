
export class AuthService {

    register(input) {
        console.log(input)
        fetch("https://localhost:5001/Identity/Account/Register", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            type:"formData",
            body: JSON.stringify(input)
        })
            .then(data => data.json())
            .then((res) => console.log(res))
            .catch()
    }
    login(username, password) {

    }
    logout(token) {

    }
}

const auth = new AuthService();

export default auth;