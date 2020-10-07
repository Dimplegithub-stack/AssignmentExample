import React from 'react';
import  { Row, Col, Table } from "reactstrap";
/*import { connect } from 'react-redux';*/

 export default function outputLeaderBoard(props) {
    const {leaderboard}=props;
    console.log("leaderboard", leaderboard);
    if(leaderboard !== ""){
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
              </tr>
            </thead>
            <tbody>
              <RenderTableData leaderboard={leaderboard} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
    )
    }else{
return(<h3 style={{textAlign:"center",color:"red"}}>Data still not available</h3>)
      
    }
   
}
const RenderTableData = props => {
    const { leaderboard } = props;
    var count = 0;
    const finalArray = leaderboard.sort((a, b) => b.score - a.score);
    return Object.keys(finalArray).map((i, o) => {
      const { player, score } = finalArray[i];
      count = count + 1;
      return (
        <tr key={count.toString(10)}>
          <th scope="row">{count.toString(10)}</th>
          <td>{player}</td>
          <td>{score}</td>
        </tr>
      );
    });
  };


