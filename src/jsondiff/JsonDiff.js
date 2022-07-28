import React, {useState} from "react";
import '../css/JsonDiff.scss'
import { Row, Col, Button } from 'react-bootstrap';

function JsonDiff(){

    const [files, setFiles] = useState('')

    const uploadHandler = (e) => {
        
        };

    return(
        <div className="container">
            <h2>The semantic JSON compare tool</h2>
            <Row className="row">
                <Col md='4'>
                    <textarea className='size' placeholder='Enter JSON to compare, enter an URL to JSON' disabled></textarea>
                    <input type='file' name='json1' onChange={
                        (e) => uploadHandler(e)} />
                </Col>
                <Col md='2'>
                    <Button size='lg'>Json</Button>
                </Col>
                <Col md='4'>
                    <textarea className='size' placeholder='Enter JSON to compare, enter an URL to JSON' disabled></textarea>
                </Col>
            </Row>
        </div>
    )
}

export default JsonDiff;