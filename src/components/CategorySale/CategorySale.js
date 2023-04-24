import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CategorySale.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CategorySale(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-sale')}>
                <div className={cx('wrapper-sale_group')}>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage1} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Daily Sale</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage2} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Mua 1 Tặng 1</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage3} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Best Seller</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage4} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Hot Deal</span>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper-sale_group')}>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage5} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Sinh Nhật Thành Viên</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage6} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Beauty Tips</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage7} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Hot Brand</span>
                        </div>
                    </div>
                    <div className={cx('wrapper-sale_group-item')}>
                        <a href="#" className={cx('wrapper-sale_group-link')}>
                            <img src={images.saleImage8} alt="sale" className={cx('roup-item_img')} />
                        </a>
                        <div className={cx('group-item_info')}>
                            <span className={cx('group-item_info-name')}>Outlet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySale;
