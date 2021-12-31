import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardBody, Col } from 'reactstrap';
import { messages } from '../../../constants';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const Chart = ({ solved = 10, pending = 10 }) => {
    const getState = () => ({
        labels: [
            // 'loading',
        ],
        datasets: [{
            data: [ solved, pending ],
            backgroundColor: [
                // '#36A2EB',
                // '#FF6384',
            ],
            hoverBackgroundColor: [
                // '#36A2EB',
                // '#FF6384',
            ],
            borderColor: 'rgba(255,255,255,0.54)',
        }],
    });
    
    const [data, setData] = useState(getState);
    useEffect(() => {
        setData(()=>({
            labels: [
                'Solved',
                'Pending',
            ],
            datasets: [{
                data: [ solved, pending],
                backgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                ],
                hoverBackgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                ],
                borderColor: 'rgba(255,255,255,0.54)',
            }],
        }) )
    }, [solved, pending]);

    return (
        <Col md={12} lg={12} xl={12} className="bg-white shadow pb-5 rounded">
            <div className="card__title pt-4 mt-1 text-sm px-3 mb-3">
                {messages.graph}
            </div>
            <Doughnut data={data} />
        </Col>
    );
};

export default Chart;