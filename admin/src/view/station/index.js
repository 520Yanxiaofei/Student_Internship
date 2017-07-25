import React, {
	Component,
	PropTypes
} from 'react';
import {
	Link,
} from 'react-router';
import {
	Spin,
	Icon,
	Col,
	Row,
	Form,
	Input,
	Breadcrumb,
	Button,
	Select
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';
import Localhostd from '../../components/public/localhost';
import Edit from '../../components/public/edit';
import StationDetai from '../../components/modal/station_detai';
const FormItem = Form.Item;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 2
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 10
		},
	},
};


class StationAdd extends React.Component {
	state = {
		visible: false,
		html: ''
	}
	editValue(html) {
		this.setState({
			html
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	componentWillUnmount() {
		window.scrollTo(0, 0);
	}
	onchangeDemo() {
		this.setState({
			visible: true
		})
	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const content = (
			<Col span={12}>
                  <Breadcrumb>
                    <Breadcrumb.Item><Link to="/" >&nbsp;<Icon type="home" />&nbsp;</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>新增岗位</Breadcrumb.Item>
				  </Breadcrumb>
            </Col>
		);
		/*查看详情*/
		const ModalDetai = {
			visible: this.state.visible,
			handleOk: () => {
				this.setState({
					visible: false
				})
			},
			handleCancel: () => {
				this.setState({
					visible: false
				})
			},
			DetaiData: {
				title: '测试',
				htmlBody: this.state.html
			}
		}
		return (
			<div>
			  <Localhostd name="新增岗位" content={content}/>
			  <QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				     <Col>
				        <Form onSubmit={this.handleSubmit}>
					        <FormItem
					          {...formItemLayout}
					          label="岗位名称"
					          hasFeedback
					        >
					          {getFieldDecorator('station', {
					            rules: [{
					              required: true, message: '岗位名称不能为空!',
					            }],
					          })(
					            <Input placeholder='请填写岗位名称'/>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="岗位行业"
					          hasFeedback
					        >
					          {getFieldDecorator('category', {
					            rules: [{
					              required: true, message: '岗位行业不能为空!',
					            }],
					          })(
					            <Input placeholder='请选择岗位行业'/>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="岗位标签"
					          hasFeedback
					        >
					          {getFieldDecorator('tag', {
					            rules: [{
					              required: true, message: '岗位标签不能为空!',
					            }],
					          })(
					            <Select
								    mode="tags"
								    style={{ width: '100%' }}
								    searchPlaceholder="标签模式"
								    placeholder="请输入标签，按回车键确定"
								  >
								    
								 </Select>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="岗位描述"
					        >
					          {/* 将生成编辑器 */}
						      <Edit editorContent={(html)=>this.editValue(html)}/>
					        </FormItem>
					        <FormItem wrapperCol={{ span: 10, offset: 2 }}>
					          <Button onClick={()=>this.onchangeDemo()}>预览效果</Button>&nbsp;&nbsp;<Button type="primary" htmlType="submit">提交发布</Button>
					        </FormItem>
					    </Form>
				     </Col>
				  </Row>
				 <StationDetai {...ModalDetai}/>
			  </QueueAnim>
			  
		   </div>
		);
	}
}

export default Form.create()(StationAdd)