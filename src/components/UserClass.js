import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
       
      this.state = {
        Userinfo:{
            name :"dummy",
            location:"dummy",
            email:"xyz",
            
        }
      }
        //console.log(this.props.name+"child Constructor");
    }

     async componentDidMount(){
//   console.log(this.props.name+"ComponentDidmount");
      const data = await fetch("https://api.github.com/users/SKrishna891");
      const json = await data.json();
        this.setState({
            Userinfo : json, 
        })
      console.log(json);

    }
    componentDidUpdate() {}
  componentWillUnmount() {
    console.log("Component willUnmount");
  }
    render(){

        const {name,location,avatar_url,email} = this.state.Userinfo;


        // console.log(this.props.name+"child render");
        return(
            <div className="user-card">
        <img src={avatar_url}/>
             <h2>Name:{name}</h2>
    <h2>location :{location}</h2>
    <h2>mailid:{email}</h2>

            </div>
        )
    }
}

export default UserClass;