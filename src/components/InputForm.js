import React, { useState } from 'react'
import  { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";



const InputForm = (props) =>{
    
    const initialInputState ={player:"", score:""};
    const [eachEntry, setEachEntry] = useState(initialInputState);

    //destructuring the eachEntry
    const {player,score} = eachEntry;
    const { updateLeaderBoardArray } = props;

      //function to handle the input
    const handleInputChange = e =>
    {
        setEachEntry({...eachEntry,
        [e.target.name]:e.target.value
    });
    };
    //console.log(eachEntry);
    const handleFinalSubmit = e => {
       
        updateLeaderBoardArray(eachEntry);
	
      
      };

    return (
        <div>
          <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h2>Leaderboard Input form</h2>
      </Col>
    </Row>
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>
            <FormGroup>
                <Label for="player">Player</Label>
                <Input name="player" placeholder="Ex: Player 1" onChange={handleInputChange} value={player}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="player">Scores</Label>
                <Input name="score" placeholder="Ex: 2345" onChange={handleInputChange} value={score}></Input>
            </FormGroup>
            <Button onClick={handleFinalSubmit}>Submit</Button>
        </Form>
        </Col>
    </Row>
        </div>
    )
}
export default InputForm;




