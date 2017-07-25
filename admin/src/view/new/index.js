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
import NewDetai from '../../components/modal/new_detai';
const FormItem = Form.Item;
const Option = Select.Option;

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


class NewAdd extends React.Component {
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
				    <Breadcrumb.Item>新增文章</Breadcrumb.Item>
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
			  <Localhostd name="新增文章" content={content}/>
			  <QueueAnim type="top" component="div">
				  <Row className={styles.SitausBox} key="1">
				     <Col>
				        <Form onSubmit={this.handleSubmit}>
					        <FormItem
					          {...formItemLayout}
					          label="文章标题"
					          hasFeedback
					        >
					          {getFieldDecorator('station', {
					            rules: [{
					              required: true, message: '文章标题不能为空!',
					            }],
					          })(
					            <Input placeholder='请填写标题'/>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="文章栏目"
					          hasFeedback
					        >
					          {getFieldDecorator('tag', {
					            rules: [{
					              required: true, message: '请选择栏目!',
					            }],
					          })(
					            <Select
								    placeholder="请选择栏目"
								    >
								    <Option value="政策解读">政策解读</Option>
								    <Option value="热点新闻">热点新闻</Option>
								    <Option value="即时新闻">即时新闻</Option>
								    <Option value="经验交流">经验交流</Option>
								    <Option value="市州动态">市州动态</Option>
								  </Select>
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="文章描述"
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
				 <NewDetai {...ModalDetai}/>
			  </QueueAnim>
			  
		   </div>
		);
	}
}

export default Form.create()(NewAdd)