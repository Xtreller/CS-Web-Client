const _url = "https://localhost:5001/api/user/";
// https://localhost:5001/api/user/register
export class AuthService {

    register(input) {
        console.log(input)
        fetch(_url+ "register",
            {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(input)
            })
            .then(data => data.json())
            .then((res) => console.log(res))
            .catch()
    }
    login(input) {
        fetch(_url+ "login",
        {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(input)
        })
        .then(data => data.json())
        .then((res) =>{
            console.log(res);
            if(res.success){
                localStorage.setItem('user_id',res.user.id);
                localStorage.setItem('email',res.user.email);
                localStorage.setItem('auth_token',res.data);
            }
        })
        .catch()
    }
    logout(token) {

    }
}

const auth = new AuthService();

export default auth;