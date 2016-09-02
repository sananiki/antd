import React from 'react';
import Header from '../components/header';
import { Row, Col } from 'antd';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} ><Header/></Col>
                </Row>
            </div>
        )
    }
}