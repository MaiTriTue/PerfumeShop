import React from 'react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import styles from './ShowProducts.module.scss';
import { bgDiscount } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function ShowProducts(props) {
    const { datas } = props;
    const [dataProducts, setDataProcts] = useState('');

    useEffect(() => {
        if (datas) {
            setDataProcts(datas);
        }
    }, []);
    return (
        <div className={cx('top-products_body')}>
            <div className={cx('wrapper-seller_products')}>
                <div className={cx('products-slide')}>
                    {dataProducts &&
                        dataProducts.map((item, index) => {
                            if (index < 12) {
                                return (
                                    <div className={cx('products-slide_item')} key={index}>
                                        <div className={cx('products-slide_item-body')}>
                                            <div className={cx('products-slide_item-discount')}>
                                                <img
                                                    src={bgDiscount}
                                                    alt={'bd discount'}
                                                    className={cx('item-discount_img')}
                                                />
                                                <div className={cx('item-discount_info')}>
                                                    <span className={cx('item-discount_content')}>Giảm</span>
                                                    <span className={cx('item-discount_number')}>{item.discount}%</span>
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
                                                <span className={cx('item-info_price-sale')}>{item.priceSale} VND</span>
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
    );
}

export default ShowProducts;
