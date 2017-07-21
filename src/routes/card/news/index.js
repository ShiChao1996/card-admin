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
import {Sub, Table, Row, Col, Card, Avatar} from 'antd'
import { DataTable } from 'components'
import { routerRedux } from 'dva/router'
import { Link } from 'dva/router'

import styles from './index.less'
import HTTP from '../../../utils/http'
import config from '../../../utils/config'

const str = 'dfdscdxcxcm红红火火红红火火还好还好O(∩_∩)O哈哈哈~或或或或或红红火火红红火火还好还好O(∩_∩)O哈哈哈~或或或或或或红红火火红红火火还好还好O(∩_∩)O哈哈哈~或或或或'


  class news extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsList: []
    }
  }

  componentWillMount(){
   /* let url = config.api.newsList
    HTTP.Get(url,
      data => {
      this.setState({
        newsList: data
      })
    },
      err => {*/
      this.setState({
        newsList: [
          {title: 'aaaa', content: str, id: '33000019940603417X',
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 2,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 3,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 4,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 5,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 6,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 7,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 8,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
          {title: 'aaaa', content: str, id: 9,
            img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
        ]
      })
     /* }
    )*/
  }

  render() {
    return (
      <div>
        {this.state.newsList.map(item => {
          return(
            <div className={styles.listItem} onClick={() => {this.navigateTo(item.id)}} class="bounce infinite">
              {item.img ?
                <div className={styles.imgBox}>
                  <Avatar src={item.img}
                          shape="square"
                          size="large" />
                </div> : null}
              <div style={{marginLeft: item.img ? 50 : 0}}>
                <span className={styles.title}>{item.title}</span>
                <br/>
                <span className={styles.content}>{item.content}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  navigateTo(id){
    this.props.dispatch(routerRedux.push({
      pathname:`/card/news/${id}`,
      query: id
    }))
    console.log('id: ', id)
  }
}

export default connect()(news)
