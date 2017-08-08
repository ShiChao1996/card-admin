import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'
import Editor from './editor2'

const Detail = ({ newsManageDetail }) => {
  const { data } = newsManageDetail
  const content = []
  console.log('newsData: ', newsManageDetail)

  return (<div className="content-inner">
    <div className={styles.content}>
      <Editor content="kdfdsafsdnHHHHHHHHHHHHHHHH" />
    </div>
  </div>)
}

Detail.propTypes = {
  newsManageDetail: PropTypes.object,
}

export default connect(({ newsManageDetail }) => ({ newsManageDetail}))(Detail)
