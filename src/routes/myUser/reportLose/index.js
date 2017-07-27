import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input, Col, Modal } from 'antd'
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item

const ReportLose = ({
  report,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  console.log(report)
  const { loading, visible, modalMsg } = report

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'report/report', payload: values })
    })
  }

  function closeModal() {
    dispatch({ type: 'report/closeModal' })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <span className={styles.title}>申请挂失</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Row gutter={16}><Col span={6} className={styles.label}>姓名</Col><Col span={16}><Input size="large" onPressEnter={handleOk} placeholder="Username" /></Col></Row>)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('stuId', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Row gutter={16}><Col span={6} className={styles.label}>学号</Col><Col span={16}><Input size="large" onPressEnter={handleOk} placeholder="Username" /></Col></Row>)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('identity', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Row gutter={16}><Col span={6} className={styles.label}>身份证</Col><Col span={16}><Input size="large" onPressEnter={handleOk} placeholder="Username" /></Col></Row>)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk}
             loading={loading}
          >
            提交
          </Button>
        </Row>

      </form>

      <Modal visible={visible}
             onCancel={() => closeModal()}
             onOk={() => closeModal()}
      >
          <span className={styles.title}>{modalMsg}</span>
      </Modal>
    </div>
  )
}

ReportLose.propTypes = {
  form: PropTypes.object,
  report: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ report }) => ({ report }))(Form.create()(ReportLose))
