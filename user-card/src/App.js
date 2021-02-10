import React from 'react'
import axios from 'axios';
import MainCard from './components/Card'
import './App.css';

class App extends React.Component{
    state = {
      users: [
      "WeiWu2",
      'tetondan',
      'dustinmyers',
      'justsml',
      'luishrd',
      'bigknell'],
      display: [
      ]
    }

  componentDidMount(){
    this.state.users.forEach((user) => {
      axios.get('https://api.github.com/users/' + user)
    .then((res) => {
      this.setState({
        display: [...this.state.display , res.data]
      })
    })
    .catch((err) => {
      console.log(err)
    })
    })
    }

  render(){
    return( 
      <div className='container'>
        {this.state.display.map((user) => {

        return <MainCard userData={user}/>

        })}
       
      </div>
      )
  }
}

export default App;
