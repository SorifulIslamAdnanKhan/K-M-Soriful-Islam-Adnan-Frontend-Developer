export const setAuthToken = (user) =>{

    const currentUser = {
        email: user.email
    }

    // Get JWT token from server

    fetch(`https://spx-rocket-app-server.vercel.app/jwt`, {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('user-access-token', data.token)
    })
}