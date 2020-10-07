import React, { useState } from 'react'
import  { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from 'react-redux';
import * as leaderAction from '../actions/leaderAction';

const InputFormRedux = (props) =>{
      const initialInputState ={player:"", score:""};
	
    const [eachEntry, setEachEntry] = useState(initialInputState);

    //destructuring the eachEntry
      const {player,score} = eachEntry;
  
    const handleInputChange = e =>
    {
        setEachEntry({...eachEntry,
        [e.target.name]:e.target.value
    });
    };
 
    const handleFinalSubmit = e => {
       e.preventDefault();
	props.createLeader(eachEntry);
      
      };

    return (
        <div>
          <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
       
      </Col>
    </Row>
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>
            <FormGroup>
                <Label for="player">Player redux</Label>
                <Input name="player" placeholder="Ex: Player 1" onChange={handleInputChange} value={player}></Input>
            </FormGroup>
         <FormGroup>
                <Label for="player">Scores redux</Label>
                <Input name="score" placeholder="Ex: 2345" onChange={handleInputChange} value={score}></Input>
            </FormGroup>
            <Button onClick={handleFinalSubmit}>Submit</Button>
        </Form>
        </Col>
    </Row>
	
        </div>
    )
}
/*const mapStateToProps = (state, ownProps) => {
	console.log("bdfsgfasfggfsfgjh",state);
	  
  return {
    leaderEntries: state.leaderreducer
	
  }

};*/

const mapDispatchToProps = (dispatch) => {
  return {
    createLeader: eachEntry => dispatch(leaderAction.createLeader(eachEntry))
   // deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect( null, mapDispatchToProps)(InputFormRedux);




