import s from './Lable.module.css';

function Lable(props) {
    return (
        <span className={s.label}>{props.labelText}</span>
    );
}

export default Lable;
