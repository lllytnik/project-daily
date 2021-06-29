import s from './SelectBlock.module.css';

function SelectBlock(props) {
    return (
        <div style={props.style} className={s.selectBlock}>
            <img className={s.selectImg} src={props.thumbnail}/>
            <select className={s.select} name="location" required="required">
                <option value="">{props.title}</option>
                <option value="1">California</option>
            </select>
        </div>



        /* <div className={s.blockTitle}>
            <h2 className={s.title}>{props.title}</h2>
            <a className={s.link} href="google.com">See all <img src={arrowIcon} alt="arrow"/></a>
        </div> */
    );
}

export default SelectBlock;
