import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        };
    }

    handleClick(e) {
        console.log('click: ', e.key);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} // extends.需要 bind(this) 或者 (e)=>this.handleClick(e)
                selectedKeys={[this.state.current]}
                mode="horizontal"
                >
                <Menu.Item key="mail">
                    <Icon type="mail" />首页
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />咨询
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />分类</span>}>
                    <MenuItemGroup title="分组1">
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}