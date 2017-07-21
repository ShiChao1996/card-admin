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
import {Sub, Table, Row, Col, Card} from 'antd'
import { DataTable } from 'components'
import styles from './index.less'

class cardInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    const firstTable = {
      dataSource: [{ key: '1', state: '正常', expire: '2019.9.1'}],
      columns: [{ title: '证件情况', dataIndex: 'state' }, { title: '到期时间', dataIndex: 'expire' }],
      pagination: false,
    }
    const secondTable = {
      dataSource: [{ key: '1', adress: 'xxx', workTime: '9:00 ~ 18:00', phone: 'xxxxxxxxxxxxx'}],
      columns: [{ title: '办公地点', dataIndex: 'adress' }, { title: '上班时间', dataIndex: 'workTime' }, { title: '联系电话', dataIndex: 'phone' }],
      pagination: false,
    }
    return (
      <div>
        <div className={styles.table}>
          <DataTable
            {...firstTable}
          />
        </div>
        <div className={styles.table}>
          <DataTable
            {...secondTable}
          />
        </div>
      </div>

    )
  }

}

export default connect()(cardInfo)
