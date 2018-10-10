import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ListContacts from './Contacts'
import Names from './Names';

class App extends Component {
  
constructor(props){
  super()
  this.state = {
    contacts : [
      {
        id: '1',
        name: 'Noor Nabiji',
        handle: '@noor4',
        avatarURL: 'http://localhost:3000/1.jpg'
      },
      {
        id: '2',
        name: 'saif',
        handle: '@saif-misbah',
        avatarURL: 'http://localhost:3000/2.jpg'
      },
      {
        id: '3',
        name: 'Noori noor',
        handle: '@noori',
        avatarURL: 'http://localhost:3000/3.jpg'
      },
      {
        id: '4',
        name: 'shoeb shaikh',
        handle: '@shoeb_shaikh',
        avatarURL: 'http://localhost:3000/4.jpg'
      },
      {
        id: '5',
        name: 'afsar shaikh',
        handle: '@afsar_shaikh',
        avatarURL: 'http://localhost:3000/5.jpg'
      },
    ],
    contactNames : [
      {
        id:1,
        contactName : "noor"
      },
      {
        id:2,
        contactName: " saif"
      },
      {
        id : 3,

        contactName: "afzal"
      }
    ]

  }

this.removeContact = this.removeContact.bind(this)
  
}
removeContact= (contact)=>{
  console.log(this);
  this.setState((currentState) => ({
    contacts: currentState.contacts.filter((c) => {
      return c.id !== contact.id
    })
  }))
}

render() {
  return (
    
   <div>
     <Nav/>
      <ol>
     <Names contactNames={this.state.contactNames}
     />
     </ol>  
     <ListContacts 
       contacts={this.state.contacts} 
       onDeleteContact = {this.removeContact}
       />
     </div>
    
  )
 
}
}

export default App;