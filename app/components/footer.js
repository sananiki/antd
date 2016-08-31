import React from 'react';
import { Tabs, Icon, WhiteSpace } from 'antd-mobile';
const TabPane = Tabs.TabPane;

export default class Footer extends React.Component {
    render() {
        return (
            <div style={{ position:'absolute',width:'100%',bottom:'0px'}}>                
                <Tabs type="tabbar" mode="dark" defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="home" />首页</span>} key="1">选项首页内容</TabPane>
                    <TabPane tab={<span><Icon type="apple" />选项</span>} key="2">选项好友内容</TabPane>
                    <TabPane tab={<span><Icon type="setting" />设置</span>} key="3">选项设置的内容</TabPane>
                </Tabs>
            </div>
        )
    }
}