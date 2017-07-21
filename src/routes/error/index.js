import React from 'react'
import { Icon } from 'antd'
import styles from './index.less'

const Error = () => <div className="content-inner">
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>404 Not Found</h1>
    <h2>this page is for test</h2>
  </div>
</div>

export default Error
