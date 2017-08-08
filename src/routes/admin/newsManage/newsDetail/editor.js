import React from 'react'
import { Editor } from 'components'
import { convertToRaw, createFromText, convertFromRaw, createFromContent } from 'draft-js'
import { Row, Col, Card } from 'antd'
import draftToMarkdown from 'draftjs-to-markdown'

export default class EditorPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editorContent: null,
    }
  }

  componentWillMount(){
    let text =  this.props.content ? this.props.content : ""
    let content = createFromText(text)

    this.setState({
      editorContent: content
    })
  }

  onEditorStateChange = (editorContent) => {
    console.log(editorContent)
    this.setState({
      editorContent,
    })
  }
  render () {
    const { editorContent } = this.state
    console.log(editorContent)
    const colProps = {
      lg: 12,
      md: 24,
    }
    const textareaStyle = {
      minHeight: 496,
      width: '100%',
      background: '#f7f7f7',
      borderColor: '#F1F1F1',
      padding: '16px 8px',
    }
    return (<div className="content-inner">
      <Row gutter={32}>
        <Col {...colProps}>
          <Card title="Editor" style={{ overflow: 'visible' }}>
            <Editor
              wrapperStyle={{
                minHeight: 500,
              }}
              editorStyle={{
                minHeight: 376,
              }}
              editorState={this.state.editorContent}
              onEditorStateChange={this.onEditorStateChange}
            />
          </Card>
        </Col>
        <Col {...colProps}>
          <Card title="Markdown">
            <textarea
              style={textareaStyle}
              disabled
              value={editorContent ? draftToMarkdown(convertToRaw(editorContent.getCurrentContent())) : ''}
            />
          </Card>
        </Col>
      </Row>
    </div>)
  }
}
