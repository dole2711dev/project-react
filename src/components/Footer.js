import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-link">
					<span className="footer-link-item">Giới thiệu</span>
					<span className="footer-link-item">Điều khoản</span>
					<span className="footer-link-item">Bảo mật</span>
					<span className="footer-link-item">Hướng dẫn</span>
					<span className="footer-link-item">Ứng dụng</span>
					<span className="footer-link-item">Liên hệ</span>
					<span className="footer-link-item">Quảng Cáo</span>
					<span className="footer-link-item">Facebook</span>
					<span className="footer-link-item">Youtube</span>
					<span className="footer-link-item">DUMA Entertainment</span>
				</div>
				<div className="footer-content">
					© Since 2005 w2solution Co.,Ltd.
				</div>
			</footer>
		</>
	);
};

export default Footer;
