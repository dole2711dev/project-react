import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-link">
					<ul className="footer-link-items">
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Giới thiệu</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Điều khoản</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Bảo mật</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Hướng dẫn</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Ứng dụng</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Liên hệ</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Quảng Cáo</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Facebook</a>
						</li>
						<li className="footer-link-item pr-10px pl-10px">
							<a href="/">Youtube</a>
						</li>
					</ul>
				</div>
				<div className="footer-content"></div>
			</footer>
		</>
	);
};

export default Footer;
