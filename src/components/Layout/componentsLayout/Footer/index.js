import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faDisplay,
    faEnvelopeOpenText,
    faGlobe,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import images from '~/assets/images';

import styles from './Footer.module.scss';
import { faAndroid, faApple, faBootstrap, faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('footer_contacts')}>
                    <div className={cx('footer_contacts-body')}>
                        <h3 className={cx('contacts-body_title')}>Hỗ Trợ Khách Hàng</h3>
                        <p>
                            Chăm sóc khách hàng: 1900 88 68 99
                            <span>(1000đ/phút , 8-21h kể cả T7, CN)</span>
                        </p>

                        <span>
                            <a href="#">Các câu hỏi thường gặp</a>
                        </span>
                        <span>
                            <a href="#">Hướng dẫn đặt hàng</a>
                        </span>
                        <span>
                            <a href="#">Phương thức thanh toán</a>
                        </span>
                        <span>
                            <a href="#">Phương thức vận chuyển</a>
                        </span>
                        <span>
                            <a href="#">Chính sách đổi hàng</a>
                        </span>
                        <span>
                            Hỗ trợ khách hàng: <a href="#">hotro@abbeautyworld.com</a>
                        </span>
                        <span>
                            Hỗ trợ kỹ thuật: <a href="#">kythuat@abbeautyworld.com</a>
                        </span>
                    </div>
                    <div className={cx('footer_contacts-body')}>
                        <h3 className={cx('contacts-body_title')}>Về AB Beauty World</h3>
                        <span>
                            <a href="#">Giới thiệu AB BEAUTY WORLD</a>
                        </span>
                        <span>
                            <a href="#">Tuyển dụng</a>
                        </span>
                        <span>
                            <a href="#">Chính sách bảo mật thanh toán</a>
                        </span>
                        <span>
                            <a href="#">Chính sách bảo mật thông tin cá nhân</a>
                        </span>
                        <span>
                            <a href="#">Chính sách giải quyết khiếu nại</a>
                        </span>
                        <span>
                            <a href="#">Liên hệ</a>
                        </span>
                    </div>
                    <div className={cx('footer_contacts-body')}>
                        <h3 className={cx('contacts-body_title')}>Hệ Thống Siêu Thị Mỹ Phẩm</h3>

                        <div className={cx('list-shop')}>
                            <span>
                                <a href="#">1613 Tỉnh Lộ 10, P. Tân Tạo A, Q. Bình Tân</a>
                            </span>
                            <span>
                                <a href="#">348 -350 Trần Phú, P. 7, Q. 5</a>
                            </span>
                            <span>
                                <a href="#">198A Mã Lò, P. Bình Trị Đông A, Q. Bình Tân</a>
                            </span>
                            <span>
                                <a href="#">236K Lê Văn Sỹ, P. 1, Q. Tân Bình</a>
                            </span>
                            <span>
                                <a href="#">388 - 390 Nguyễn Thị Thập, P. Tân Quy, Q.7</a>
                            </span>
                            <span>
                                <a href="#">198 Lũy Bán Bích, P. Hòa Thạnh, Q. Tân Phú</a>
                            </span>
                            <span>
                                <a href="#">509 Quang Trung, Quận Gò Vấp</a>
                            </span>
                            <span>
                                <a href="#">1046 - 1048 Đường 3/2, P. 12, Quận 11</a>
                            </span>
                            <span>
                                <a href="#">99 Nguyễn Trãi, P.2, Quận 5</a>
                            </span>
                            <span>
                                <a href="#">143B - 143C Khánh Hội, P.3, Quận 4</a>
                            </span>
                            <span>
                                <a href="#">488 - 490 CMT8, P. 11, Quận 3</a>
                            </span>
                            <span>
                                <a href="#">148 Nguyễn Gia Trí, P. 25, Q. Bình Thạnh</a>
                            </span>
                            <span>
                                <a href="#">141 Phan Đăng Lưu, P. 2, Q. Phú Nhuận</a>
                            </span>
                            <span>
                                <a href="#">167 Cộng Hòa, Phường 12, Tân Bình</a>
                            </span>
                        </div>
                    </div>
                    <div className={cx('footer_contacts-body')}>
                        <h3 className={cx('contacts-body_title')}>Hợp Tác Và Liên Kết</h3>
                        <span>
                            <a href="#">Tin tức / Blog</a>
                        </span>
                        <span>
                            <a href="#">Angel Beauty Clinic</a>
                        </span>
                        <span>
                            <a href="#">Liên hệ</a>
                        </span>
                        <span>
                            <a href="#" className={cx('contacts-body_title')}>
                                Phương thức Thanh Toán
                            </a>
                        </span>
                    </div>
                    <div className={cx('footer_contacts-body')}>
                        <h3 className={cx('contacts-body_title')}>Kết Nối Với Chúng Tôi</h3>
                    </div>
                </div>
                <div className={cx('footer_about')}>
                    <div className={cx('footer_about-info')}>
                        <p>
                            <span className={cx('contacts-body_title')}>Địa chỉ văn phòng:</span> 198A Mã Lò, P. Bình
                            Trị Đông A, Q. Bình Tân, thành phố Hồ Chí Minh
                        </p>
                        <p>
                            AB Beauty World nhận đặt hàng trực tuyến, giao hàng tận nơi và hỗ trợ mua, nhận hàng trực
                            tiếp tại các chuỗi cửa hàng
                        </p>
                        <div className={cx('contacts-body_copyring')}>
                            <p className={cx('contacts-body_copyring-info')}>
                                © 2020 - Bản quyền của Công Ty TNHH AB BEAUTY WORLD - Abbeautyworld.com
                            </p>
                            <p className={cx('contacts-body_dkkd')}>
                                Giấy chứng nhận Đăng ký Kinh doanh số 0315979558 do Sở Kế hoạch và Đầu tư Thành phố Hồ
                                Chí Minh cấp ngày 23/10/2019
                            </p>
                            <div className={cx('footer_about-logo-check')}>
                                <img src={images.logoBCT} alt={'logo bo cong thuong'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
