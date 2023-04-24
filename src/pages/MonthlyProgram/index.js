import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './MonthlyProgram.module.scss';

import { check, delivery, money, shop, telephone } from '~/assets/iconVector';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, changeCountProduct } from '~/pages/CartPage/CartPageSlice';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function MonthlyProgram() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-hot-brand')}>
                <h1>Thông tin trang web đang được cập nhật.</h1>
                <p>Mong quý khách thông cảm !!! </p>
                <p>Chúc quý khách có những trải nghiệm hài lòng khi sử dụng dịch vụ của chúng tôi !!!</p>
            </div>
        </div>
    );
}

export default MonthlyProgram;
