import styles from './index.less';

const Footer = ({
	footerBj
}) => {
	return (
		<div className={footerBj=='default'?styles.FooterDefault:styles.FooterBox}>
          <div>关于我们 | 服务协议 | 广纳英才 | 联系我们</div>
          <p>
            某某有限公司版权所有，未经书面授权禁止使用 鄂ICP备11013096号-1 湖北大学生实习实训网
          </p>
      </div>
	)
}
export default Footer