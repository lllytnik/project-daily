import s from './Lable.module.css';

function Lable(props) {
    return (
        <span className={s.label} style={props.style}>{props.labelText}</span>
    );
}

export default Lable;
