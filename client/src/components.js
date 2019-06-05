import React from 'react';

const Home = () => <p>Home</p>
const About  = () => <p>About</p>

const Users = ({ history, match }) => {
    console.log(match)
    // history.push('/about')
    // const history = {}
    console.log('users-history',history)
    return (<p>Users</p>
        
    )
}



export { Home, About, Users }