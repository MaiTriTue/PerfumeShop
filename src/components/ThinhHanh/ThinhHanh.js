import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import styles from './ThinhHanh.module.scss';

import { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import { promotionPrice, lip, da, tam, nam, nuocHoa, phuKien, baby, thuoc, sucKhoe } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function ThinhHanh(props) {
    // const { searchvalue, nameList, HandleSelecterProduct } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-thinh-hanh')}>
                <div className={cx('thinh-hanh_title')}>
                    <FontAwesomeIcon icon={faFireFlameCurved} className={cx('thinh-hanh_title-icon')} />
                    <span className={cx('thinh-hanh_title-name')}>Tìm Kiếm Thịnh Hành</span>
                </div>
                <div className={cx('thinh-hanh_body')}>
                    <div className={cx('thinh-hanh_body-item')}>
                        <a href="#" className={cx('thinh-hanh_body-item-link')}>
                            <img src={images.thinhHanh1} alt="anh thinh hanh" className={cx('thinh-hanh_body-img')} />
                        </a>
                    </div>
                    <div className={cx('thinh-hanh_body-item')}>
                        <a href="#" className={cx('thinh-hanh_body-item-link')}>
                            <img src={images.thinhHanh2} alt="anh thinh hanh" className={cx('thinh-hanh_body-img')} />
                        </a>
                    </div>
                    <div className={cx('thinh-hanh_body-item')}>
                        <a href="#" className={cx('thinh-hanh_body-item-link')}>
                            <img src={images.thinhHanh3} alt="anh thinh hanh" className={cx('thinh-hanh_body-img')} />
                        </a>
                    </div>
                    <div className={cx('thinh-hanh_body-item')}>
                        <a href="#" className={cx('thinh-hanh_body-item-link')}>
                            <img src={images.thinhHanh4} alt="anh thinh hanh" className={cx('thinh-hanh_body-img')} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThinhHanh;
