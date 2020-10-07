import React from 'react';
import InputFormRedux  from "../components/InputFormRedux";
import OutputLeaderBoardRedux from '../components/OutputLeaderBoardRedux';
//import * as lable from '../constants/label';
import {HAEDER_TITLE} from '../constants/label';


export default function LeaderDetailsRedux() {


    return (
        <div className="container mt-4">

          <h2 style={{textAlign:"center",marginTop:"70px",marginBottom:"20px"}}>{HAEDER_TITLE}</h2> 
		 <InputFormRedux />
            <h3 style={{textAlign:"center",marginTop:"30px"}}>Details of the Learder Board</h3>
		  <OutputLeaderBoardRedux/>
        </div>
    )
}
