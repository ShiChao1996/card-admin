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
import {DataTable} from 'components'
import styles from './index.less'
import HTTP from '../../../utils/http'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      isLoading: false,
      name: "",
      stuId: "",
      identity: "",
      modalMsg: ""
    }
  }

  render() {
    const {personality} = this.props
    return (
      <div className={styles.form}>
        <span className={styles.title}>申请挂失</span>

        <Row gutter={16} className={styles.line}>
          <Col span={6} className={styles.label}>姓名</Col>
          <Col span={16}><Input size="large" disabled={this.state.isLoading}
                                onChange={(e) => this.setInfo('name', e)}
                                placeholder="Username"/></Col>
        </Row>
        <Row gutter={16} className={styles.line}>
          <Col span={6} className={styles.label}>学号</Col>
          <Col span={16}><Input size="large" disabled={this.state.isLoading}
                                onChange={(e) => this.setInfo('stuId', e)}
                                placeholder="Username"/></Col>
        </Row>
        <Row gutter={16} className={styles.line}>
          <Col span={6} className={styles.label}>身份证</Col>
          <Col span={16}><Input size="large" disabled={this.state.isLoading}
                                onChange={(e) => this.setInfo('identity', e)}
                                placeholder="Username"/></Col>
        </Row>
        <Button type="primary" size="large" className={styles.btn}
                onClick={() => this.handleOk()} loading={this.state.isLoading}>
          提交
        </Button>

        <Modal
          visible={this.state.visible}
          onOk={() => this.closeModal()}
          onCancel={() => this.closeModal()}>
          {this.state.modalMsg}
        </Modal>
      </div>
    )
  }

  closeModal(){
    this.setState({
      visible: false
    })
  }

  setInfo(type, e) {
    let value = e.target.value
    if (value !== "") {
      switch (type) {
        case "name": {
          this.setState({
            name: value
          })
          break
        }
        case "stuId": {
          this.setState({
            stuId: value
          })
          break
        }
        case "identity": {
          this.setState({
            identity: value
          })
          break
        }
      }
    }
  }

  handleOk() {
    this.setState({
      isLoading: true
    })
    let url;
    let info = {
      name: this.state.name,
      stuId: this.state.stuId,
      idemtity: this.state.identity
    }
    setTimeout( ()=>{
      HTTP.Post(url, info, () => {
          this.setState({
            isLoading: false,
            visible: true,
            modalMsg: "提交成功!"
          })
        },
        () => {
          this.setState({
            isLoading: false,
            visible: true,
            modalMsg: "提交失败!"
          })
        })
    }
      , 3000
    )

  }

}


