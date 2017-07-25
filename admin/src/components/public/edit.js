import React, {
	Component,
	PropTypes
} from 'react';
import styles from './edit.less'
//初始化编辑器
export default class Edit extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			editorContent: '',
			isFullScreen: false
		}
	}
	componentDidMount() {
			const toolbar = document.getElementById('editor-toolbar')
			const elem = document.getElementById('editorElem')
			console.log(elem)
			const editor = new window.wangEditor(toolbar, elem);
			// editor.customConfig.uploadImgServer = '/upload'
			editor.customConfig.uploadImgShowBase64 = true;
			// 将图片大小限制为 3M
			// editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024
			// 限制一次最多上传 5 张图片
			editor.customConfig.uploadImgMaxLength = 5;

			// 使用 onchange 函数监听内容的变化，并实时更新到 state 中
			editor.customConfig.onchange = html => {
				this.props.editorContent(html)
			}
			editor.create()
				// 获取使用到的元素
			this.toolbarContaner = document.getElementById('toolbar-container')
			this.editorText = document.getElementById('editor-text')
			this.cover = document.getElementById('cover')
			this.container = document.getElementById('container')
		}
		//点击事件
	onchangeBtn() {
			const {
				isFullScreen
			} = this.state;
			if (isFullScreen) {
				this.setState({
					isFullScreen: false
				})
				this.unDoFullScreen()
			} else {
				this.setState({
					isFullScreen: true
				})
				this.doFullScreen()
			}
		}
		// 全屏事件
	doFullScreen() {
			console.log(this)
			this.cover.style.display = 'block'
			this.editorText.style.height = '460px';
			this.cover.appendChild(this.toolbarContaner)
			this.cover.appendChild(this.editorText)
		}
		// 退出全屏事件
	unDoFullScreen() {
			this.container.appendChild(this.toolbarContaner)
			this.container.appendChild(this.editorText)
			this.editorText.style.height = '300px';
			this.cover.style.display = 'none'
		}
		/*点击获取内容区*/
		// clickHandle() {
		// 	alert(this.state.editorContent)
		// }
	render() {
		return (
			<div>
				{/*全屏模式*/}
			    <div id="cover"></div>
			    {/*非全屏模式*/}
			    <div id="container">
			       {/*菜单栏*/}
			        <div id="toolbar-container">
			            <div id="editor-toolbar"></div>
			            <div id="btn-container">
			                {/*<button onClick={this.onchangeBtn.bind(this)}>全屏</button>*/}
			            </div>
			        </div>
			        {/*编辑区域*/}
			        <div id="editor-text">
			        </div>
			    </div>
		     </div>
		)
	}
}