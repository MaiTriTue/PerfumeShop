import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faStore } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [keywordSearch, setKeywordSearch] = useState('');

    const ChangeKeyword = (event) => {
        setKeywordSearch(event.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-all')}>
                <div className={cx('wrapper-left')}>
                    <div className={cx('wrapper-left_logo')}>
                        <img className={cx('wrapper-left_logo-img')} src={images.logoShop} alt="logo" />
                    </div>
                    <div className={cx('wrapper-left_search')}>
                        <div className={cx('wrapper-left_search-input')}>
                            <input
                                type={'text'}
                                value={keywordSearch}
                                onChange={(event) => {
                                    ChangeKeyword(event);
                                }}
                                placeholder="Nhập từ khóa tìm kiếm ..."
                            />
                            <div className={cx('search-input_icon')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                        <div className={cx('wrapper-left_search-link')}>
                            <span>
                                <a href="#">Nước tẩy trang</a>
                            </span>
                            <span>
                                <a href="#">Sữa rửa mặt</a>
                            </span>
                            <span>
                                <a href="#">Kem chống nắng</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-right')}>
                    <div className={cx('wrapper-right_function')}>
                        <FontAwesomeIcon icon={faStore} className={cx('wrapper-right_icon')} />
                        <div className={cx('wrapper-right_name')}>
                            <h3>Cửa hàng & dịch vụ</h3>
                            <span>Chi tiết</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-right_function')}>
                        <FontAwesomeIcon icon={faCircleUser} className={cx('wrapper-right_icon')} />
                        <div className={cx('wrapper-right_name')}>
                            <h3>Đăng nhập</h3>
                            <span>Tài khoản</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-right_function')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('wrapper-right_icon')} />
                        <div className={cx('wrapper-right_name')}>
                            <h3>Giỏ hàng</h3>
                        </div>
                        <div className={cx('count-product')}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
