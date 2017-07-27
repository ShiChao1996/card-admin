import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  console.log(login)
  const { loginLoading } = login

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="Password" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginLoading}>
            Sign in
          </Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>

      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))


/*

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
    // loading={loading}
  >
    提交
  </Button>
  </Row>

  </form>
  {/!*{
 loading ? <Icon type="sync" spin={true} className={styles.loading} /> : null
 }*!/}

</div>*/
