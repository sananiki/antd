import React from 'react';
import { TabBar  } from 'antd-mobile';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            notifCount: 0,
            presses: 0,
        }
    }

    renderContent(pageText, num?: number) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%' }}>
                <div style={{ paddingTop: 30, marginLeft: 50 }}>{pageText}</div>
                <div style={{ margin: 50 }}>{num} re-renders of the {pageText}</div>
            </div>
        );
    }

    render() {
        return (
            <div >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                    <TabBar.Item
                        title="生活"
                        key="生活"
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png' }}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        } }
                        >
                        {this.renderContent('生活 Tab') }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                        title="口碑"
                        key="口碑"
                        badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                                notifCount: this.state.notifCount + 1,
                            });
                        } }
                        >
                        {this.renderContent('口碑 Tab', this.state.notifCount) }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                        title="朋友"
                        key="朋友"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                                presses: this.state.presses + 1,
                            });
                        } }
                        >
                        {this.renderContent('朋友 Tab', this.state.presses) }
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                        title="我的"
                        key="我的"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        } }
                        >
                        {this.renderContent('我的 Tab', this.state.presses) }
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}