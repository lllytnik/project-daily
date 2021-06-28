import s from './BlockTitle.module.css';
import arrowIcon from '../../images/block-title/icon-arrow.svg';

function BlockTitle(props) {
    return (
        <div className={s.blockTitle}>
            <h2 className={s.title}>{props.title}</h2>
            <a className={s.link} href="google.com">See all <img src={arrowIcon} alt="arrow"/></a>
        </div>
    );
}

export default BlockTitle;
