import styles from './index.less';

const InternShip = ({}) => {
	return (
		<div className={styles.InterBox}>
		  <div className={styles.InterImg}>
		    <img src="img/img01.png"/>
		  </div>
	      <div className={styles.InterList}>
	        <ul>
	          <li>
	            <div className={styles.InterBabel}>1</div>
	            <div className={styles.InterBorLeft}>
	              <h2>实习安排</h2>
	              <p>
	                实习岗位有多种分配方式:<br/>
	                1、人社部门与高校对接<br/>
	                2、学生与企业对接<br/>
	                3、食宿安排<br/>
	              </p>
	            </div>
	          </li>
	          <li>
	            <div className={styles.InterBabel}>2</div>
	            <div className={styles.InterBorLeft}>
	              <h2>实习报到</h2>
	              <p>
	               在网上下载打印《大学生实习实训单位报到通知单》《大学生实习实训后勤保障基地报到通知单》到单位报到上岗开始实习实训,单位要及时将学生到岗信息反馈给人社部门
	              </p>
	            </div>
	          </li>
	          <li>
	            <div className={styles.InterBabel}>3</div>
	            <div className={styles.InterBorLeft}>
	              <h2>实习过程</h2>
	              <p>
	               实习过程中如实习单位变更、入住基地变更和其他情况应及时反馈。
	              </p>
	            </div>
	          </li>
	          <li>
	            <div className={styles.InterBabel}>4</div>
	            <div className={styles.InterBorLeft}>
	              <h2>实习过程</h2>
	              <p>
	              实习结束后，网上下载并打印《大学生实习实训鉴定表》与《大学生实习结束告知书》。
	              </p>
	            </div>
	          </li>
	          <li>
	            <div className={styles.InterBabel}>5</div>
	            <div className={styles.InterBorLeft}>
	              <h2>实习过程</h2>
	              <p>
	              实训补贴由实习实训基地按月向所在当地人社部门申请；大学生本人及所在高校（院系）也可经由实习实训基地出具意见后提出申请，申请材料中应附《大学生实习实训补贴申请表》，此表可在网站上自动生成后下载。按照申请要求填完后提交并审核，经审核并公示不少于5个工作日后，将审核结果送交同级财政部门。
	              </p>
	            </div>
	          </li>
	        </ul>
	      </div>

		</div>
	)
}
export default InternShip