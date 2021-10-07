import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {PieChart, Pie, Cell, Tooltip} from 'recharts'
import Diagram from '../components/Diagram'
import ChartForm from '../components/ChartForm'

const colors=['#8884d8',"#83a6ed","#8dd1e1","#82ca9d","#a4de6c","#d0ed57"];
function ChartPage(){
    const data=[
        {name: 'AAA', value: 100},
        {name: 'BBB', value: 300},
        {name: 'CCC', value: 200}
    ]
    const [diagramType, setDiagramType]=useState('LineChart')
    return(
        <Container fluid className="">
            <Row>
                <Col className="p-5 border border-dark">
                    <ChartForm setDiagramTypeFunction={setDiagramType}/>
                </Col>
                <Col className="p-5 border border-dark">
                    <Diagram data={data} diagramType={diagramType} colors={colors}/>
                </Col>
            </Row>
        </Container>
    );
}
export default ChartPage;