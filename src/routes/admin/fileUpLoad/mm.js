import {Table, Input, Icon, Button, Popconfirm, Modal, Row, Col, Upload, message} from 'antd';
import styles from "./index.less"
import { request, config } from 'utils'




var fileInfo;
const upLoadUrl = ""      //上传地址

const props = {
  name: 'file',
  action: upLoadUrl,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    fileInfo = info;
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
  }
  check = () => {
    this.setState({editable: false});
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({editable: true});
  }

  render() {
    const {value, editable} = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.newValues = {}
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'name')} />
      ),
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          this.state.dataSource.length > 1 ?
            (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                <a href="#">Delete</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      }],
      count: 2,
      modalVisible: false,
      loading: false
    };
  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({dataSource});
    };
  }

  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({dataSource});
  }

  handleAdd = () => {
  /*  const {count, dataSource} = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });*/
    this.openEdit()
  }

  render() {
    const {dataSource} = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} />

        <Modal visible={this.state.modalVisible}
               onCancel={() => this.closeEditModal()}
               onOk={() => this.update()}
               confirmLoading={this.state.loading}
        >
          <div className={styles.modalContainer}>
            <Row className={styles.line}>
              <Col span={6} className={styles.col}>文件名</Col>
              <Col span={18} className={styles.col}>
                <Input onBlur={(e) => this.setValue('name', e)} />
              </Col>
            </Row>
            <Row className={styles.line}>
              <Col span={6} className={styles.col}>文件描述</Col>
              <Col span={18} className={styles.col}>
                <Input onBlur={(e) => this.setValue('desc', e)} />
              </Col>
            </Row>

            <Row className={styles.line}>
              <Col span={6} className={styles.col}>选择文件</Col>
              <Col span={18} className={styles.col}>
                <Upload {...props} >
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
              </Col>
            </Row>

          </div>
        </Modal>
      </div>
    );
  }

  openEdit() {
    this.setState({
      modalVisible: true
    })
  }

  closeEditModal() {
    this.setState({
      modalVisible: false
    })
  }

  update(){

  }

  setValue(tag, e){
    this.newValues[tag] = e.target.value
  }
}


export default EditableTable
