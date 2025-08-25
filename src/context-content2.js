import React from "react";
import { userContext } from "./context";

export default function Context2(){
    let [user,setUser] = React.useContext(userContext)
    const contextStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }
    const onClickSignin = (event) =>{
        event.preventDefault()
        setUser('Tom and Jerry')
    }
    return(
        <div style={contextStyle}>
            {
                (user)
                ? <span>Hello {user}</span>
                : <span>Please <a href="" onClick={onClickSignin}>Signin</a></span>
            }
        </div>
    )
}
