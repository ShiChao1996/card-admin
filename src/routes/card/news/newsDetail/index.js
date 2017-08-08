import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Detail = ({ newsDetail }) => {
  const { data } = newsDetail
  const content = []
  console.log('newsData: ', newsDetail)

  return (<div className="content-inner">
    <div className={styles.content}>
      xxxxxxxdddd
    </div>
  </div>)
}

Detail.propTypes = {
  newsDetail: PropTypes.object,
}

export default connect(({ newsDetail }) => ({ newsDetail}))(Detail)
