/**
 * Created by see on 8/7/17.
 */

import React from 'react';
import ReactMarkdown from 'react-markdown'
import {Sub, Button, Row, Col, Card, Input, } from 'antd'

import styles from './index.less'

const { TextArea } = Input;
var input = "fjdkfdsfsdfdsfsadfsd"

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.content ? this.props.content : ""
    }
    }
  render() {
    return (
      <div className={styles.editor_container}>
        <Row gutter={40}>
          <Col lg={11} md={24} className={styles.wrap}>
            <TextArea
              defaultValue={this.state.text}
              rows={25}
              onChange={(e) => this.textChange(e)} />
          </Col>
          <Col lg={11} md={24} className={styles.wrap}>
            <div className={styles.output}>
              <ReactMarkdown source={this.state.text} />
            </div>
          </Col>
        </Row>

      </div>
    );
  }

  textChange(e){
    this.setState({
      text: e.target.value
    })
  }
}
