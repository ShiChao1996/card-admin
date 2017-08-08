/*
 * MIT License
 *
 * Copyright (c) 2017 Shichao Inc.
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
/**
 * Revision History:
 *     Initial: 2017/07/05        Shi Chao
 */
'use strict'

function requestByGet (url, onSucceed, onFailure) {
  // console.log("Get " + url + " started.");

  fetch(url, { // eslint-disable-line no-undef
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    .then((resp) => resp.json())
    .then((json) => {
      // console.log("Get Succeed for " + url + ", response:" + JSON.stringify(json));

      onSucceed(json)
    })
    .catch((err) => {
      // console.error("Get failed for " + url + ", error:" + err);

      onFailure(err)
    })
}

function requestByPost (url, params, onSucceed, onFailure) {
  fetch(url, { // eslint-disable-line no-undef
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)})
    .then((resp) => resp.json())
    .then((json) => {
      // console.log("Post succeed for " + url + ", response:" + JSON.stringify(json));

      onSucceed && onSucceed(json)
    })
    .catch((err) => {
     // console.error("Post failed for " + url + ", error:" + err);

      onFailure && onFailure(err)
    })
}

const HTTP = {
  Get: requestByGet,
  Post: requestByPost
}

export default HTTP
