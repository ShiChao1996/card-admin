import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Table from './table'
import styles from './index.less'

const Person = () => {

  return (
    <div className="content-inner">
      <h2>hhhhdfsansd</h2>
      <Table />
    </div>
  )
}

Person.propTypes = {
  person: PropTypes.object,
}

export default connect()(Person)
