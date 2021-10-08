import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {PieChart, Pie, Cell, Tooltip} from 'recharts'
import Diagram from '../components/Diagram'
import ChartForm from '../components/ChartForm'

const colors=['#8884d8',"#83a6ed","#8dd1e1","#82ca9d","#a4de6c","#d0ed57"];
function ChartPage(){
    const [data, setData]=useState([
        {id: 1, name: 'AAA', value: 100},
        {id: 2, name: 'BBB', value: 300},
        {id: 3, name: 'CCC', value: 200},
        {id: 4, name: 'DDD', value: 400}
    ])
    const [diagramType, setDiagramType]=useState('Линейный график')
    return(
        <Container fluid className="">
            <Row>
                <Col className="p-5 border border-dark">
                    <ChartForm setDiagramTypeFunction={setDiagramType} data={data} setData={setData}/>
                </Col>
                <Col className="p-5 border border-dark">
                    <Diagram data={data} diagramType={diagramType} colors={colors}/>
                </Col>
            </Row>
        </Container>
    );
}
export default ChartPage;