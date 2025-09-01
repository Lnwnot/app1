import { useContext, useEffect, useState } from "react";
import QuestionData from "../data/QuestionData";
import { DataContext } from "../App";

const Quiz = ()=>{
    //console.log(QuestionData);
    const [current,setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState("")
    const {score,setScore} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice!==""){
            if(selectChoice===QuestionData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }
    
    const nextQuestion=()=>{
        setSelectChoice("")
        setCurrent(current+1)
    }

    return(
        <div className="quiz">
            <h1>{QuestionData[current].question}</h1>
            <div>
                <button onClick={()=>setSelectChoice("A")}>{QuestionData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionData[current].D}</button>
            </div>
        </div>
    )
}
export default Quiz;