import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SlideMain.module.scss';

import { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';
import { promotionPrice, lip, da, tam, nam, nuocHoa, phuKien, baby, thuoc, sucKhoe } from '~/assets/iconVector';
import { SlideImages } from '~/FakeDada';

const cx = classNames.bind(styles);

function SlideMain(props) {
    const [imagesSlide, setImagesSlide] = useState(SlideImages);
    const [widthItemSlide, setWidthItemSlide] = useState(0);
    const slideRef = useRef(null);
    const slideItemRef = useRef(null);

    useEffect(() => {
        changeImage(widthItemSlide);
    }, [widthItemSlide]);

    useEffect(() => {
        let timeInter = setInterval(() => {
            setWidthItemSlide(
                widthItemSlide == slideItemRef.current.clientWidth * 7
                    ? 0
                    : widthItemSlide + slideItemRef.current.clientWidth,
            );
        }, 5000);
        return () => {
            clearInterval(timeInter);
        };
    }, [widthItemSlide]);

    const handleClickNext = () => {
        setWidthItemSlide(
            widthItemSlide == slideItemRef.current.clientWidth * 7
                ? 0
                : widthItemSlide + slideItemRef.current.clientWidth,
        );
    };
    const handleClickPrev = () => {
        setWidthItemSlide(
            widthItemSlide == 0
                ? slideItemRef.current.clientWidth * 7
                : widthItemSlide - slideItemRef.current.clientWidth,
        );
    };
    const handleClickTo = () => {
        console.log('go to ....');
    };

    const changeImage = (number) => {
        slideRef.current.style.marginLeft = '-' + number + 'px';
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-left')} onClick={handleClickPrev}>
                <FontAwesomeIcon icon={faChevronLeft} className={cx('wrapper-left_icon')} />
            </div>
            <div className={cx('wrapper-right')} onClick={handleClickNext}>
                <FontAwesomeIcon icon={faChevronRight} className={cx('wrapper-right_icon')} />
            </div>
            <div className={cx('wrapper-slide')} onClick={handleClickTo} ref={slideRef}>
                {imagesSlide &&
                    imagesSlide.map((item, index) => {
                        return (
                            <div className={cx('wrapper-slide_item')} key={index} ref={slideItemRef}>
                                <a href={"#"}   className={cx('wrapper-slide_item-link')}><img src={item.img} alt={'image slide'} className={cx('wrapper-slide_item-image')} /></a>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default SlideMain;
