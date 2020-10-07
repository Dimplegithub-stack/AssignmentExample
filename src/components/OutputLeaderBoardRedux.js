import React from 'react';
import  { Row, Col, Table,Button } from "reactstrap";
import { connect } from 'react-redux';
import RenderTableData from '../components/RenderTableData';
import {sortAsc} from '../actions/leaderAction';

 function outputLeaderBoardRedux(props) {
   console.log("44444444444444444sssssssssssssss",props.leaderEntries);
 
   
   let leaderboard = props.leaderEntries; 
    
    if(leaderboard != ""){
		
		const handleSortAcs = e => {
      
	sortAsc(leaderboard);
      
      };
      return (
        <div className="mt-4">

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
				 <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableData />
            </tbody>
          </Table>
        </Col>
      </Row>
	  <Row>
	  
	   <Col sm="12" md={{ size: 6, offset: 3 }}>
	 <Button style={{marginRight:"10px"}} onClick={handleSortAcs}>Sort Ascending</Button>
	
	
	</Col>
	</Row>
	 
    </div>
    )
    }else{
return(<h3 style={{textAlign:"center",color:"green"}}>Data still not available</h3>)
      
    }
    
   
}
 const mapStateToProps = (state, ownProps) => {
	console.log("bdfsgfasfggfsfgjh",state);  
  return {
    leaderEntries: state.leaderreducer	
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortAcs: leaderboard => dispatch(sortAsc(leaderboard))
  
  }
};

export default connect( mapStateToProps, mapDispatchToProps)(outputLeaderBoardRedux);


 





