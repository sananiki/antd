import React from 'react';
import { ListView, Toast, Button } from 'antd-mobile';

const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '相约酒店',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '麦当劳邀您过周末',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '食惠周',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;
export default class Lists extends React.Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = pIndex * NUM_SECTIONS + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref
            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
        };
        this.genData();
        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: false,
        };
    }


    onEndReached(event) {
        // load new data
        console.log('reach end', event);
        Toast.info('加载新数据');
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 1000);
    }


    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`} style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}></div>
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'white',
                    }}
                    >
                    <h3 style={{
                        padding: 2,
                        marginBottom: 8,
                        borderBottom: '1px solid #F6F6F6',
                    }}>{obj.title}</h3>
                    <div style={{ display: 'flex' }}>
                        <img style={{ height: 64, marginRight: 8 }} src={obj.img} />
                        <div>
                            <p>{obj.des}</p>
                            <p><span style={{ fontSize: 24, color: '#FF6E27' }}>35</span>元/任务</p>
                        </div>
                    </div>
                </div>
            );
        };
        this.ctrlBodyScroll(false, true);
    return (<div style={{ margin: '0 auto', width: '96%' }}>
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderSectionHeader={(sectionData) => (
          <div>{`任务 ${sectionData.split(' ')[1]}`}</div>
        )}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); }}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        style={{ height: 500, overflow: 'auto', border: '1px solid #ddd', margin: '10px 0' }}
      />
      
    </div>);
  }
  ctrlBodyScroll(flag, init) {
    document.body.style.overflowY = flag ? 'auto' : 'hidden';
    if (parent && parent !== self && !init) {
      parent.document.body.style.overflowY = flag ? 'auto' : 'hidden';
    }
  }
}
