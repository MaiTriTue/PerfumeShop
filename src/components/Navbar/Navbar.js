import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';

import { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import { promotionPrice, lip, da, tam, nam, nuocHoa, phuKien, baby, thuoc, sucKhoe } from '~/assets/iconVector';
import { CategoryList } from '~/FakeDada';

const cx = classNames.bind(styles);

function Navbar(props) {
    const [categoryList, setCategoryList] = useState(CategoryList);
    const [subList, setSubList] = useState({
        img: '',
        name: '',
        imgDropdow: '',
        sub1Name: '',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    });
    const [isHover, setIsHover] = useState({ ishove: false, index: '' });
    const categoryItemRef = useRef(null);
    const dropdowRef = useRef(null);

    useEffect(() => {
        if (isHover.ishove) {
            dropdowRef.current.style.display = 'flex';
        } else {
            dropdowRef.current.style.display = 'none';
        }
    }, [isHover]);

    const CategoryItemHover = () => {
        console.log('hover item');
    };

    const handleMouseOver = (index, item) => {
        if (index != 10) {
            if (item.sub1Name != '') {
                setIsHover({ ishove: true, index: index });
                setSubList(item);
            } else {
                setIsHover({ ishove: false, index: index });
            }
        } else {
            setIsHover({ ishove: true, index: index });
        }
    };

    const handleMouseLeave = (index) => {
        setIsHover({ ishove: false, index: index });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-navbar')}>
                <div className={cx('wrapper-category')}>
                    <FontAwesomeIcon icon={faBars} className={cx('wrapper-category_icon')} />
                    <span className={cx('wrapper-category_name')}>Danh Mục Sản Phẩm</span>
                    <div className={cx('wrapper-category_detail')}>
                        <ul className={cx('catagory-list')}>
                            {categoryList &&
                                categoryList.map((item, index) => {
                                    return (
                                        <li
                                            className={cx('catagory-list_item')}
                                            onMouseOver={() => handleMouseOver(index, item)}
                                            onMouseLeave={() => handleMouseLeave(index)}
                                            ref={categoryItemRef}
                                            key={index}
                                        >
                                            <div className={cx('wrapper-catagory_item')}>
                                                <div className={cx('wrapper-category_icon')}>
                                                    <img src={item.img} alt="uu dai" className={cx('category_icon')} />
                                                </div>
                                                <span className={cx('category_name')}>{item.name}</span>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>

                        <div className={cx('wrapper-dropdow_befor')}></div>

                        <div
                            className={cx('wrapper-dropdow')}
                            ref={dropdowRef}
                            onMouseOver={() => handleMouseOver(10)}
                            onMouseLeave={() => handleMouseLeave(10)}
                        >
                            <div className={cx('wrapper-dropdow_Link')}>
                                <div className={cx('wrapper-dropdow_Link-btn')}>
                                    <div className={cx('Link-btn')}>
                                        <span className={cx('Link-btn_name')}>Nổi bật</span>
                                    </div>
                                    <div className={cx('Link-btn')}>
                                        <span className={cx('Link-btn_name')}>Bán chạy</span>
                                    </div>
                                    <div className={cx('Link-btn')}>
                                        <span className={cx('Link-btn_name')}>Hàng mới</span>
                                    </div>
                                    <div className={cx('Link-btn')}>
                                        <span className={cx('Link-btn_name')}>Khuyến mại</span>
                                    </div>
                                </div>
                                {subList && (
                                    <div className={cx('wrapper-dropdow_Link-detail')}>
                                        <div className={cx('wrapper-Link')}>
                                            {subList.sub1Name != '' && (
                                                <div className={cx('wrapper-Link_detail')}>
                                                    <span>{subList.sub1Name} </span>
                                                </div>
                                            )}
                                            {subList.sub2Name != '' && (
                                                <div className={cx('wrapper-Link_detail')}>
                                                    <span>{subList.sub2Name} </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className={cx('wrapper-Link')}>
                                            {subList.sub3Name != '' && (
                                                <div className={cx('wrapper-Link_detail')}>
                                                    <span>{subList.sub3Name} </span>
                                                </div>
                                            )}
                                            {subList.sub4Name != '' && (
                                                <div className={cx('wrapper-Link_detail')}>
                                                    <span>{subList.sub4Name} </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={cx('wrapper-dropdow_img')}>
                                <img src={subList.imgDropdow} alt={'minh hoa'} className={cx('dropdow_img')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper-menu')}>
                    <ul className={cx('wrapper-menu_list')}>
                        <li>
                            <a href="/thuong-hieu-hot">Thương Hiệu Hot</a>
                        </li>
                        <li>
                            <a href="/pages/tin-tuc">Cẩm Nang Làm Đẹp</a>
                        </li>
                        <li>
                            <a href="https://angelbeauty.com.vn/">Angel Beauty</a>
                        </li>
                        <li>
                            <a href="/pages/sale-month">Chương Trình Tháng 4</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('wrapper-review')}>
                    <FontAwesomeIcon icon={faCircle} className={cx('wrapper-review_icon')} />

                    <span className={cx('wrapper-review_name')}>Review</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
