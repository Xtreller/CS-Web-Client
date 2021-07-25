
export class AuthService {

    register(email, password) {

        fetch("https://localhost:44322/register", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
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

export default auth ;