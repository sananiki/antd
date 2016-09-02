import React from 'react';
import { Timeline } from 'antd';

export default class Times extends React.Component {
    render() {
        return (
            <Timeline pending={<a href="#">查看更多</a>}>
                <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
                <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}


