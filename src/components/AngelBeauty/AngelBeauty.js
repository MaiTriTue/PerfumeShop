import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import styles from './AngelBeauty.module.scss';
import { bgDiscount } from '~/assets/iconVector';
import ShowProducts from '../ShowProducts/ShowProducts';
import { AngelBeautyList } from '~/FakeDada';

const cx = classNames.bind(styles);

function AngelBeauty(props) {
    const [dataProducts, setDataProcts] = useState('');
    const [isDatas, setIsDatas] = useState(false);

    useEffect(() => {
        if (AngelBeautyList) {
            setDataProcts(AngelBeautyList);
            setIsDatas(true);
        }
    }, []);
    return (
        <div className={cx('wrapper')}>
            {isDatas && (
                <div className={cx('wrapper-top-products')}>
                    <div className={cx('wrapper-top-products_btn')}>
                        <div className={cx('top-products_btn')}>
                            <span className={cx('top-products_name')}>Hệ Thống Thẩm Mỹ ANGEL BEAUTY</span>
                        </div>
                    </div>

                    <div className={cx('top-products_body')}>
                        <div className={cx('wrapper-seller_products')}>
                            <div className={cx('products-slide')}>
                                {dataProducts.map((item, index) => {
                                    return (
                                        <div className={cx('products-slide_item')} key={index}>
                                            <a href={item.link} className={cx('products-slide_item-link')}>
                                                <div className={cx('wrapper-item_img')}>
                                                    <img
                                                        src={item.img}
                                                        alt="anh lieu trinh"
                                                        className={cx('products-slide_item-img')}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AngelBeauty;
