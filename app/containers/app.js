import React from 'react';
import Header from '../components/header';
import List from '../components/list';
import { Row, Col } from 'antd';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={18} offset={3}><Header/></Col>
                </Row>
                <Row>
                     <Col span={18} offset={3}><List/></Col>
                </Row>
            </div>
        )
    }
}