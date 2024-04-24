import UserClass from "./UserClass"
import User from './User'
import React from 'react'
import UserContext from "../utils/UserContext";



class About extends React.Component{
constructor(props){
    super(props);
    console.log("parent constructor")
}

componentDidMount(){
    console.log("prent componentDidmount")
}


    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser : 
                    <UserContext.Consumer>
                        {(data)=>data.loggedInUser}
                    </UserContext.Consumer>
                </div>
                <h2>This is namste react web series</h2>
                <UserClass name={"sree class"}/>
            </div>
        )
    }
}




export default About