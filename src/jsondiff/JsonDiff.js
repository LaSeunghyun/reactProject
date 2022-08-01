import React, {useState} from "react";
import '../css/JsonDiff.scss'
import { Row, Col, Button } from 'react-bootstrap';

function JsonDiff(){
    const [files, setFiles] = useState([])
    const [diff, setDiff] = useState([])

    const uploadHandler = (e) => {
        let file = e.target.files[0];
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let jsonparse = JSON.parse(fileReader.result);
            setFiles(jsonparse)
        };
        fileReader.readAsText(file);
    };

    const diffHandler = (e) => {
        let diff = e.target.files[0];
        let diffReader = new FileReader();

        diffReader.onload = () => {
            let parse = JSON.parse(diffReader.result);
            // let wer = JSON.stringify(parse, null, 2);
            setDiff(parse)
        };
    
        diffReader.readAsText(diff);
    };

    // traverse(files, diff);

    // for(let i in files){
    //     if (diff.hasOwnProperty(i)){

    //     } else {
    //     }
    // }
    return(
        <div className="container">
            <h2>The semantic JSON compare tool</h2>
            <Row className="row">
                <Col md='4'>
                    <textarea className='size' placeholder='Enter JSON to compare, enter an URL to JSON' value={files} disabled></textarea>
                    <input type='file' name='json1' onChange={
                        (e) => uploadHandler(e)} />
                </Col>
                <Col md='2'>
                    <Button size='lg'>Json</Button>
                </Col>
                <Col md='4'>
                    <textarea className='size' placeholder='Enter JSON to compare, enter an URL to JSON' value={diff} disabled></textarea>
                    <input type='file' name='json2' onChange={
                        (e) => diffHandler(e)} />
                </Col>
            </Row>
        </div>
    )
}

export default JsonDiff;