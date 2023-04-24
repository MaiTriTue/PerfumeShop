import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import styles from './TopProducts.module.scss';
import { bgDiscount } from '~/assets/iconVector';
import ShowProducts from '../ShowProducts/ShowProducts';

const cx = classNames.bind(styles);

function TopProducts(props) {
    const { imageTitle, datas } = props;
    const [dataProducts, setDataProcts] = useState('');
    const [isDatas, setIsDatas] = useState(false);

    useEffect(() => {
        if (datas) {
            setDataProcts(datas);
            setIsDatas(true);
        }
    }, []);
    return (
        <div className={cx('wrapper')}>
            {isDatas && (
                <div className={cx('wrapper-top-products')}>
                    <div className={cx('top-products_title')}>
                        <a href={imageTitle.link} className={cx('wrapper-banner_sale-day-link')}>
                            <img src={imageTitle.img} alt="banner" className={cx('wrapper-banner_sale-day')} />
                        </a>
                    </div>
                    <div className={cx('wrapper-top-products_btn')}>
                        <div className={cx('top-products_btn')}>
                            <a href={imageTitle.link} className={cx('top-products_btn-link')}>
                                <span className={cx('top-products_name')}>Xem tất cả</span>
                            </a>
                        </div>
                    </div>
                    <ShowProducts datas={dataProducts} />
                    {/* <div className={cx('top-products_body')}>
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
                                                                <span className={cx('item-discount_content')}>
                                                                    Giảm
                                                                </span>
                                                                <span className={cx('item-discount_number')}>
                                                                    {item.discount}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <a href="#" className={cx('products-slide_item-img-link')}>
                                                            <img
                                                                src={item.img}
                                                                className={cx('products-slide_item-img')}
                                                            />
                                                        </a>

                                                        <div className={cx('products-slide_item-info')}>
                                                            <div className={cx('wrapper-item-info_name')}>
                                                                <a href="#" className={cx('item-info_name-link')}>
                                                                    <span className={cx('item-info_name')}>
                                                                        {item.name}
                                                                    </span>
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
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default TopProducts;
