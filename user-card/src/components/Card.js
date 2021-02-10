import React from 'react'
import './MainCard.css'

export default class MainCard extends React.Component{
    render(){
        const { userData } = this.props;
        console.log(userData)
        return (
        <div className='card'>
            <img src={userData.avatar_url} alt='' />
            <div class="card-info">
            <h3 class="name">{userData.name}</h3>
            <p class="username">{userData.login}</p>
            <p>Location: {userData.location}</p>
            <p>Profile:
          <a href={userData.url}>{userData.url}</a>
        </p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Bio: {userData.bio}</p>
            </div>
        </div>)
    }


}