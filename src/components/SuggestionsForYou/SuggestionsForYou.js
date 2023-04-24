import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestionsForYou.module.scss';
import { bgDiscount } from '~/assets/iconVector';
import ShowProducts from '../ShowProducts/ShowProducts';

const cx = classNames.bind(styles);

function SuggestionsForYou(props) {
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
                    <div className={cx('wrapper-top-products_btn')}>
                        <div className={cx('top-products_btn')}>
                            <div className={cx('top-products_line')}></div>
                            <span className={cx('top-products_name')}>Gợi Ý Dành Riêng Cho Bạn</span>
                            <div className={cx('top-products_line')}></div>
                        </div>
                    </div>
                    <ShowProducts datas={dataProducts} />

                    <div className={cx('wrapper-suggestions_btn')}>
                        <a href={imageTitle.link} className={cx('suggestions_btn-link')}>
                            <div className={cx('Suggestions_btn')}>
                                <span className={cx('suggestions_name')}>Xem tất cả</span>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SuggestionsForYou;
