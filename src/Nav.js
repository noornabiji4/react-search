import React, { Component } from 'react';
class Nav extends Component{

constructor(props){
    super();
    this.state = {
        selectebNavBar : "Home"
    }
   this.updateNavBar=this.updateNavBar.bind(this)
}    
updateNavBar=(list)=>{
    this.setState(function (){
        return{
            selectebNavBar : list
        }
    })
}

render(){
    var NavBar=["Home" , "Profile" , "About"]

    return(
    <div>
    <ul className= "navelement">
    {NavBar.map((list)=>{
        return <li style= {list===this.state.selectebNavBar ? {color : 'blue'}:null} 
        key={list}
            // onClick = {()=>this.updateNavBar(list)}>
            onClick = {this.updateNavBar.bind(null , list)}>
        {list}</li>

    },this)}
    
    </ul>

    
    </div>

    )
}
    
}
export default Nav


