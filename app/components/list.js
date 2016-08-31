import React from 'react';
import { List, Switch } from 'antd-mobile';
export default class Lists extends React.Component {
    render() {
        return (
            <List>
                <List.Header>带缩略图</List.Header>
                <List.Body>
                    <List.Item
                        thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
                        arrow="horizontal"
                        >thumb</List.Item>
                    <List.Item
                        thumb="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png"
                        >thumb</List.Item>
                    <List.Item
                        icon=""
                        extra={<img src="https://zos.alipayobjects.com/rmsportal/zotStpFiYpNtZNl.png" width="28" height="28" />}
                        arrow="horizontal"
                        >extra为标签</List.Item>
                </List.Body>
            </List>
        )
    }
}