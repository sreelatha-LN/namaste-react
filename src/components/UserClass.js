import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
      name: "test", 
      url:"default",
      avatar_url:"hhhhhh"
      }
    };
    console.log("child constructor")
  }

  async componentDidMount(){
    console.log("child componenedimiunt")

    const data= await fetch("https://api.github.com/users/sreelatha-LN")
    const json =await data.json();
    this.setState({
      userInfo: json
    })

  }
  componentDidUpdate(){
    console.log("componentdidupdate")
  }

  componentWillUnmount(){
    console.log("componet unmount")
  }

  render() {
    console.log("child render")
    const{ name, url, avatar_url}=this.state.userInfo
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>{url}</h3>
        <h4>Contact: @sree30</h4>
      </div>
    );
  }
}
export default UserClass;
