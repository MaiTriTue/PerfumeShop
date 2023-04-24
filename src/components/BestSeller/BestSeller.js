import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBoltLightning,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faFireFlameCurved,
} from '@fortawesome/free-solid-svg-icons';

import styles from './BestSeller.module.scss';

import { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import { bgDiscount } from '~/assets/iconVector';

import { BestSellerData } from '~/FakeDada';

const cx = classNames.bind(styles);

function BestSeller(props) {
    const [Hour1, setHour1] = useState(0);
    const [Minute1, setMinute1] = useState(0);
    const [second1, setsecond1] = useState(0);
    const [BestSellers, setBestSellers] = useState(BestSellerData);
    const slideRef = useRef(null);
    const slideItemRef = useRef(null);
    const [widthItemSlide, setWidthItemSlide] = useState(0);

    // dong ho
    useEffect(() => {
        setHour1(9);
        setMinute1(59);
        setsecond1(59);
    }, []);

    useEffect(() => {
        const timeInter = setInterval(runsecondTime, 1000);

        return () => {
            clearInterval(timeInter);
        };
    }, [second1]);

    useEffect(() => {
        if (second1 == 0 && Minute1 == 0 && Hour1 == 0) {
            setHour1(9);
            setMinute1(59);
            setsecond1(59);
        } else if (second1 == 0 && Minute1 == 0 && Hour1 != 0) {
            setHour1(Hour1 - 1);
            setMinute1(59);
            setsecond1(59);
        } else if (second1 == 0 && Minute1 != 0 && Hour1 != 0) {
            setMinute1(Minute1 - 1);
            setsecond1(59);
        }
    }, [second1]);

    //  Slide ------------
    useEffect(() => {
        changeMarginSlide(widthItemSlide);
    }, [widthItemSlide]);

    useEffect(() => {
        let timeInter = setInterval(() => {
            setWidthItemSlide(
                widthItemSlide == slideItemRef.current.clientWidth * 6
                    ? 0
                    : widthItemSlide + slideItemRef.current.clientWidth,
            );
        }, 5000);
        return () => {
            clearInterval(timeInter);
        };
    }, [widthItemSlide]);

    const runsecondTime = () => {
        if (second1 > 0) {
            setsecond1(second1 - 1);
        } else {
            setsecond1(59);
        }
    };

    // chuwa xong ------------------------

    const handleClickNext = () => {
        setWidthItemSlide(
            widthItemSlide == slideItemRef.current.clientWidth * 6
                ? 0
                : widthItemSlide + slideItemRef.current.clientWidth,
        );
    };
    const handleClickPrev = () => {
        setWidthItemSlide(
            widthItemSlide == 0
                ? slideItemRef.current.clientWidth * 6
                : widthItemSlide - slideItemRef.current.clientWidth,
        );
    };
    const handleClickTo = () => {
        console.log('go to ....');
    };

    const changeMarginSlide = (number) => {
        slideRef.current.style.marginLeft = '-' + number + 'px';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-seller')}>
                <div className={cx('wrapper-left')} onClick={handleClickNext}>
                    <FontAwesomeIcon icon={faChevronLeft} className={cx('wrapper-left_icon')} />
                </div>
                <div className={cx('wrapper-right')} onClick={handleClickPrev}>
                    <FontAwesomeIcon icon={faChevronRight} className={cx('wrapper-right_icon')} />
                </div>
                <div className={cx('wrapper-seller_header')}>
                    <div className={cx('wrapper-seller_header-info')}>
                        <FontAwesomeIcon icon={faBoltLightning} className={cx('wrapper-seller_header-icon')} />
                        <span className={cx('wrapper-seller_header-name')}>Best Seller</span>
                        <div className={cx('wrapper-seller_header-time')}>
                            <div className={cx('time-hour')}>
                                <span>{Hour1 < 10 ? '0' + Hour1 : Hour1}</span>
                            </div>
                            <span className={cx('time-colon')}>:</span>
                            <div className={cx('time-minute')}>
                                <span>{Minute1 < 10 ? '0' + Minute1 : Minute1}</span>
                            </div>
                            <span className={cx('time-colon')}>:</span>
                            <div className={cx('time-second')}>
                                <span>{second1 < 10 ? '0' + second1 : second1}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-seller_header-see-more')}>
                        <span>
                            <a href="#" className={cx('see-more_link')}>
                                Xem thêm
                                <FontAwesomeIcon icon={faChevronRight} className={cx('see-more_icon')} />
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('wrapper-seller_products')}>
                    <div className={cx('products-slide')} ref={slideRef}>
                        {BestSellers &&
                            BestSellers.map((item, index) => {
                                if (index < 12) {
                                    return (
                                        <div className={cx('products-slide_item')} ref={slideItemRef} key={index}>
                                            <div className={cx('products-slide_item-body')}>
                                                <div className={cx('products-slide_item-discount')}>
                                                    <img
                                                        src={bgDiscount}
                                                        alt={'bd discount'}
                                                        className={cx('item-discount_img')}
                                                    />
                                                    <div className={cx('item-discount_info')}>
                                                        <span className={cx('item-discount_content')}>Giảm</span>
                                                        <span className={cx('item-discount_number')}>
                                                            {item.discount}%
                                                        </span>
                                                    </div>
                                                </div>
                                                <a href="#" className={cx('products-slide_item-img-link')}>
                                                    <img src={item.img} className={cx('products-slide_item-img')} />
                                                </a>

                                                <div className={cx('products-slide_item-info')}>
                                                    <div className={cx('wrapper-item-info_name')}>
                                                        <a href="#" className={cx('item-info_name-link')}>
                                                            <span className={cx('item-info_name')}>{item.name}</span>
                                                        </a>
                                                    </div>
                                                    <span className={cx('item-info_price-sale')}>
                                                        {item.priceSale} VND
                                                    </span>
                                                    <span className={cx('item-info_original-price')}>
                                                        {item.originalPrice} VND
                                                    </span>
                                                    <div className={cx('item-info_quantity-sold')}>
                                                        <FontAwesomeIcon
                                                            icon={faFireFlameCurved}
                                                            className={cx('quantity-sold_icon')}
                                                        />
                                                        <span className={cx('quantity-sold_count')}>
                                                            ĐÃ BÁN: {item.quantitySold}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
