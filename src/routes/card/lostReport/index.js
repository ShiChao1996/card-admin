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
import {Sub, Table, Row, Col, Card, Button} from 'antd'
import { DataTable } from 'components'
import styles from './index.less'

const columns = [
  { title: 'Name', width: 80, dataIndex: 'name', key: '0' },
  { title: '学号', width: 80, dataIndex: 'address', key: '1' },
  { title: '遗失时间', width: 80, dataIndex: 'address', key: '2' },
  { title: '地点', width: 80, dataIndex: 'address', key: '3' }
];

const data = [{
  key: '1',
  name: 'John ',
  age: 32,
  address: 'New York ParkNew York ParkNew',
  description: 'd你才大姐SVN单身快乐时代大厦看风景的师傅来电东方健康的说法都是减肥的时刻'
}, {
  key: '2',
  name: 'Jim ',
  age: 40,
  address: 'London Park',
}];


class cardInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    let Width = document.documentElement.clientWidth
    let scrollWidth = Width > 769 ? 700 : 500
    return(
      <div className={styles.table}>
        <Table columns={columns} dataSource={data}
               expandedRowRender={record => record.description ? <span>{record.description}</span> : null}
               scroll={{ x: scrollWidth }}
               pagination={false} />
      </div>

    )
  }


}

export default connect()(cardInfo)


/*
const LostReport = ({ userDetail }) => {
  let Width = document.documentElement.clientWidth
  let scrollWidth = Width > 769 ? 700 : 500
  return(
    <div className={styles.table}>
      <Table columns={columns} dataSource={data}
             expandedRowRender={record => record.description ? <span>{record.description}</span> : null}
             scroll={{ x: scrollWidth }}
             pagination={false} />
    </div>

  )
}

LostReport.propTypes = {
  userDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ userDetail, loading }) => ({ userDetail, loading: loading.models.userDetail }))(LostReport)
*/
