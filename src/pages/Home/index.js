import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import {
    Navbar,
    SlideMain,
    CategorySale,
    BestSeller,
    TopProducts,
    ThinhHanh,
    SuggestionsForYou,
    AngelBeauty,
} from '~/components';

import images from '~/assets/images';
import { BannerList, BestSellerData } from '~/FakeDada';

const cx = classNames.bind(styles);

function Home() {
    const [Banner2, setBanner2] = useState(false);
    const banner3Ref = useRef(null);
    const banner4Ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setBanner2(true);
    }, []);

    useEffect(() => {
        if (Banner2) {
            banner3Ref.current.style.transition = 'all 5s ease-in-out';
            banner3Ref.current.style.opacity = '0';
        } else {
            banner4Ref.current.style.transition = 'all 5s ease-in-out';
            banner4Ref.current.style.opacity = '0';
        }
    }, [Banner2]);

    useEffect(() => {
        const timeInter = setInterval(function ChangeBanner2() {
            if (Banner2) {
                banner3Ref.current.style.transition = 'none';
                banner3Ref.current.style.opacity = '1';
            } else {
                banner4Ref.current.style.transition = 'none';
                banner4Ref.current.style.opacity = '1';
            }
            setBanner2(!Banner2);
        }, 5000);

        return () => {
            clearInterval(timeInter);
        };
    }, [Banner2]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-navbar')}>
                <Navbar />
            </div>

            <div className={cx('wrapper-area')}>
                <div className={cx('area-one_category')}></div>
                <div className={cx('area-one_slide')}>
                    <SlideMain />
                </div>
                <div className={cx('area-one_notification')}>
                    <div className={cx('area-one_notification-detail')}>
                        <a href="#" className={cx('notification-detail_link')}>
                            <img src={images.promotionDay1} alt="quang cao" className={cx('notification-detail_img')} />
                        </a>
                    </div>
                    <div className={cx('area-one_notification-detail')}>
                        <a href="#" className={cx('notification-detail_link')}>
                            <img src={images.promotionDay2} alt="quang cao" className={cx('notification-detail_img')} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-area')}>
                <CategorySale />
            </div>
            <div className={cx('wrapper-area_best-sale')}>
                <BestSeller />
            </div>
            <div className={cx('wrapper-area')}>
                <a href={BannerList[2].link} className={cx('wrapper-banner_sale-day-link')}>
                    <img src={BannerList[2].img} alt="banner" className={cx('wrapper-banner_sale-day')} />
                </a>
            </div>
            <div className={cx('wrapper-area')}>
                {Banner2 && Banner2 ? (
                    <a href={BannerList[3].link} className={cx('wrapper-banner_sale-day-link1')}>
                        <img
                            src={BannerList[3].img}
                            alt="banner"
                            className={cx('wrapper-banner_sale-woman')}
                            ref={banner3Ref}
                        />
                    </a>
                ) : (
                    <a href={BannerList[4].link} className={cx('wrapper-banner_sale-day-link1')}>
                        <img
                            src={BannerList[4].img}
                            alt="banner"
                            className={cx('wrapper-banner_sale-woman')}
                            ref={banner4Ref}
                        />
                    </a>
                )}
            </div>

            <div className={cx('wrapper-area')}>
                <TopProducts imageTitle={BannerList[5]} datas={BestSellerData} />
            </div>

            <div className={cx('wrapper-area')}>
                <TopProducts imageTitle={BannerList[6]} datas={BestSellerData} />
            </div>

            <div className={cx('wrapper-area')}>
                <TopProducts imageTitle={BannerList[7]} datas={BestSellerData} />
            </div>
            <div className={cx('wrapper-area')}>
                <TopProducts imageTitle={BannerList[8]} datas={BestSellerData} />
            </div>

            <div className={cx('wrapper-area')}>
                <ThinhHanh />
            </div>

            <div className={cx('wrapper-area')}>
                <a href={BannerList[9].link} className={cx('wrapper-banner_sale-day-link')}>
                    <img src={BannerList[9].img} alt="banner" className={cx('wrapper-banner_sale-day')} />
                </a>
            </div>

            <div className={cx('wrapper-area')}>
                <SuggestionsForYou imageTitle={BannerList[8]} datas={BestSellerData} />
            </div>
            <div className={cx('wrapper-area')}>
                <AngelBeauty />
            </div>
        </div>
    );
}

export default Home;
