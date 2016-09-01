import { NavBar, Icon} from 'antd-mobile';
import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <NavBar iconName={false}
                rightContent={<Icon type="ellipsis" />}
                >首页</NavBar>
        )
    }
}
