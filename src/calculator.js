import { render } from "@testing-library/react";
import React from "react";
export class Calculator extends React.Component{
    n1 = 20
    n2 = 4

    calculate = (op) => {
        let c = `${this.n1}${op}${this.n2}`
        let r = eval(c)
        alert(`${c}=${r}`)
    }
    render() {
        return(
            <div style={{textAlign:'center',marginTop:20}}>
                <span>{this.n1}</span>&nbsp;
                <button onClick={()=>this.calculate('+')}>+</button>&nbsp;
                <button onClick={()=>this.calculate('-')}>-</button>&nbsp;
                <button onClick={this.calculate.bind(this,'*')}>*</button>&nbsp;
                <button onClick={this.calculate.bind(this,'/')}>/</button>&nbsp;
                <span>{this.n2}</span>
            </div>
        )
    }
}
