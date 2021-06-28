import s from './Time.module.css';
import clockIcon from '../../images/headliner/clock.svg';

function Time(props) {
    return (
        <div className={s.time}>
            <img className={s.timeIcon} src={clockIcon} alt="" />
            <span>{props.time}</span>
        </div>
    );
}

export default Time;
