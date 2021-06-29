import s from './Item.module.css';

function Item(props) {
    return (
        <span className={s.itemSpan}>
            <a className={s.itemLink} href="google.com" >
                <img className={s.iconImg} src={props.thumbnail} alt="icon" />{props.title}
            </a>
        </span>

    );
}

export default Item;
