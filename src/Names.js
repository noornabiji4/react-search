import React from "react";

const Names = function (props) {
    console.log(props)
    return (
        <ol>
            {props.contactNames.map((names)=><li key={names.id}>{names.contactName}</li>)}
        </ol>
    )
}


// class Names extends React.Component{
//     render(){
//        console.log(this.props.names)
//         return(
//             <div>
//             <ol>
//               {this.props.names.map((name)=>{
//                   return <li key={name.id}>{name.contactName}</li>
//               })}
//             </ol>
//             </div>

//         )
//     }

// }

export default Names