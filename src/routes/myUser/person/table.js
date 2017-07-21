
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
import {Sub, Input, Row, Col, Card, Modal, Button} from 'antd'
import { DataTable } from 'components'
import styles from './index.less'

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      confirmLoading: false,
      currentPhone: '111',
      newPhone: '',
      errMsg: ''
    }
  }

  render() {
    return (
      <div className={styles.table}>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>姓名</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>性别</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>民族</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>学历</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>学号</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>院系</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>专业班级</Col>
          <Col span={10}  className={styles.col}>hjkhjhjhj</Col>
        </Row>
        <Row className={styles.line}>
          <Col span={10}  className={styles.col}>电话</Col>
          <Col span={10}  className={styles.col}>{this.state.currentPhone}   <Button type='primary' onClick={() => this.showModal()}>修改</Button></Col>
        </Row>
        <Modal title="Title"
               visible={this.state.visible}
               onOk={this.handleOk}
               confirmLoading={this.state.confirmLoading}
               onCancel={this.handleCancel}
        >
          <div>
            <span className={styles.phoneLabel}>电话</span>
            <Input defaultValue={this.state.currentPhone}
                   onFocus={() => this.setState({errMsg: ''})}
                   id="newPhoneInput"
                   style={{width: '70%', marginLeft: 15}} />
            <br/>
            {this.state.errMsg ? <span className={styles.errMsg}>{this.state.errMsg}</span> : null}
          </div>
        </Modal>
      </div>
    )
  }

  showModal() {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    let newPhone = document.getElementById('newPhoneInput').value
    let isValid = newPhone.search(/^1[34578]\d{9}$/)
    if(isValid === -1){
      this.setState({
        errMsg: '电话格式不正确'
      })
      return
    }

    this.setState({
      newPhone: newPhone,
      confirmLoading: true,
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
        currentPhone: newPhone
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      errMsg: ''
    });
  }
}

export default connect()(Table)
