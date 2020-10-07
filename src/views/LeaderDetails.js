import React, { useState } from 'react';
import InputForm  from "../components/InputForm";
import OutputLeaderBoard from '../components/OutputLeaderBoard';



export default function LeaderDetails() {
const [leaderboard, setLeaderBoard] = useState([]);

const updateLeaderBoardArray = eachEntry =>{
    setLeaderBoard([...leaderboard, eachEntry]);

} 

    return (
        <div className="container mt-4">

          
            <InputForm updateLeaderBoardArray={updateLeaderBoardArray}/>
            <h3 style={{textAlign:"center",marginTop:"30px"}}>Details of the Learder Board</h3>
            <OutputLeaderBoard leaderboard={leaderboard}/>
        </div>
    )
}

