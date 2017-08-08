import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Table from './table'
import styles from './index.less'

const WorkAdress = ({ workAdress, dispatch }) => {

  console.log(workAdress)
  function submit(payload) {
    console.log('im callback!!!')
    dispatch({type: 'workAdress/submit', payload: payload})
  }
  return (
    <div className="content-inner">
      <Table onOk={submit} isLoading={workAdress.loading} />
    </div>
  )
}

WorkAdress.propTypes = {
  workAdress: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ workAdress }) => ({ workAdress }))(WorkAdress)
