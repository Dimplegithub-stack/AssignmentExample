import React from 'react';
import { connect } from 'react-redux';
import * as leaderAction from '../actions/leaderAction';

const RenderTableData = props => {
	   let leaderboard = props.leaderEntries;
    var count = 0;
	 const handleDelete =(e,i)=> 
   {  console.log("indexiiiiiiiiiiiiiiiiii",i);
	   e.preventDefault();
	   props.deleteLeader(i);
	   
   }
   
    return Object.keys(leaderboard).map((i, index) => {
      const { player, score } = leaderboard[i];
      count = (count + 1);
      return (
        <tr key={index}>
          <th scope="row">{count.toString(10)}</th>
          <td>{player}</td>
          <td>{score}</td>
		   <td> <button onClick= {(e)=>handleDelete(e,index)}  className="btn btn-danger">
            Remove
          </button></td>
        </tr>
      );
    });
  };
   
   const mapStateToProps = (state, ownProps) => {
	console.log("bdfsgfasfggfsfgjh",state);  
  return {
    leaderEntries: state.leaderreducer	
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
     createLeader: eachEntry => dispatch(leaderAction.createLeader(eachEntry)),
    deleteLeader: i =>dispatch(leaderAction.deleteLeader(i))
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(RenderTableData);