import React, { useState, useEffect } from 'react';
import {Chart,Point,Line,Axis,Area,Tooltip,Coordinate} from 'bizcharts';
import DataSet from '@antv/data-set';

const RadarChart=()=>{

    const { DataView } = DataSet;
    const dv = new DataView().source(data);
    dv.transform({
        type: 'fold',
        fields: ['x'],
        key: 'user',
        value: 'y',
    });
    return(
        <Chart
            height={400}
            data={dv.rows}
            autoFit
            scale={{
                y:{
                    min: 0,
                    //max: 80,
                }
            }}
            interactions={['legend-highlight']}
        >
            <Coordinate type="polar" radius={0.8} />
            <Tooltip shared />
            <Point
                position="x*y"
                color="x"
                shape="circle"
            />
            <Line
                position="item*score"
                color="x"
                size="2"
            />
            <Area
                position="item*score"
                color="user"
            />
            <Axis name="y" grid={{ line: {type: 'line'}}} />
            <Axis name="x" line={false} />
        </Chart> 
    )
}

export default RadarChart

