/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2017/07/13        ShiChao
 */

import React from 'react'
import {connect} from 'dva'
import {Sub, Upload, message, Icon, Button} from 'antd'
import { DataTable } from 'components'
import styles from './index.less'

const upLoadUrl = ""      //上传地址
var fileInfo;

const props = {
  name: 'file',
  action: upLoadUrl,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    fileInfo = info;
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


const data = [{
  key: '1',
  name: 'John ',
  address: 'www.baidu.com',
  description: 'd你才大姐SVN单身快乐时代大厦看风景的师傅来电东方健康的说法都是减肥的时刻'
}, {
  key: '2',
  name: 'Jim ',
  address: 'London Park',
}];


class FileUpLoad extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      { title: '文件名', width: 100, dataIndex: 'name', key: '0' },
      { title: '下载', width: 100, dataIndex: 'address', key: '1', render: address => <a href="${address}"><Button>点击下载</Button></a> },
      { title: 'x', width: 30, key: '2', render: () => <Button onClick={(text, record, index) => {console.log(text);console.log(record);console.log(index)}}>删除</Button> },
    ];
  }

  componentWillMount(){
    console.log(this.props.fileUpLoad)
  }

  render(){
    let Width = document.documentElement.clientWidth
    let scrollWidth = Width > 769 ? 700 : 500
    return(
      <div className={styles.table}>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>

        {/*<Table columns={this.columns} dataSource={data}
               expandedRowRender={record => record.description ? <span>{record.description}</span> : null}
               scroll={{ x: scrollWidth }}
               pagination={false} />*/}

       {/* <Modal visible={this.state.editModalVisible}
               onCancel={() => this.closeEditModal()}
               onOk={() => this.changeData()}
               confirmLoading={this.state.loading}
        >
          <div className={styles.modalContainer}>
            <Row className={styles.line}>
              <Col span={6} className={styles.col}>{columns[0].title}</Col>
              <Col span={18} className={styles.col}>
                <Input defaultValue={this.state.dataSource[0].adress} onBlur={(e) => this.getNew('adress', e)}/>
              </Col>
            </Row>
            <Row className={styles.line}>
              <Col span={6} className={styles.col}>{columns[1].title}</Col>
              <Col span={18} className={styles.col}>
                <Input defaultValue={this.state.dataSource[0].workTime} onBlur={(e) => this.getNew('workTime', e)}/>
              </Col>
            </Row>
            <Row className={styles.line}>
              <Col span={6} className={styles.col}>{columns[2].title}</Col>
              <Col span={18} className={styles.col}>
                <Input defaultValue={this.state.dataSource[0].phone} onBlur={(e) => this.getNew('phone', e)}/>
              </Col>
            </Row>
          </div>
        </Modal>*/}
      </div>

    )
  }


}

export default connect(({ fileUpLoad }) => ({ fileUpLoad }))(FileUpLoad)
