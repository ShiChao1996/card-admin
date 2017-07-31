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
import {Sub, Input, Row, Col, Modal, Button, message} from 'antd'
import {DataTable} from 'components'
import styles from './index.less'

class WorkTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [
        {key: '1', adress: 'xxx', workTime: '9:00 ~ 18:00', phone: 'xxxxxxxxxxxxx'},
      ],
      editModalVisible: false,
      loading: false
    }
    this.currentValues = this.state.dataSource[0]
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.isLoading,
    })
  }

  render() {
    const columns = [
      {title: '办公地点', dataIndex: 'adress'},
      {title: '上班时间', dataIndex: 'workTime'},
      {title: '联系电话', dataIndex: 'phone'},
      {
        title: '编辑',
        width: 100,
        key: 'operate',
        fixed: 'right',
        render: () => <Button type="primary" onClick={() => this.openEdit()}>编辑</Button>
      }
    ]

    return (
      <div>
        <div className={styles.table}>
          <DataTable
            columns={columns}
            pagination={false}
            dataSource={this.state.dataSource}
          />
        </div>
        <Modal visible={this.state.editModalVisible}
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
        </Modal>
      </div>

    )
  }

  openEdit() {
    this.setState({
      editModalVisible: true
    })
  }

  closeEditModal() {
    this.setState({
      editModalVisible: false
    })
  }

  changeData() {
    let payload = {
      adress: this.currentValues.adress,
      workTime: this.currentValues.workTime,
      phone: this.currentValues.phone,
      onSuccess: (newvalues) =>  {
        message.success('提交成功！',5)
        this.state.dataSource.adress = newvalues.adress
        this.state.dataSource.workTime = newvalues.workTime
        this.state.dataSource.phone = newvalues.phone

        this.setState({
          editModalVisible: false,
          dataSource: this.state.dataSource
        })
      },
      onFail: () =>  message.error('提交失败！',5)
    }
    this.props.onOk(payload);
  }

  getNew(key, e) {
    this.currentValues[key] = e.target.value
  }

}

export default connect()(WorkTable)
