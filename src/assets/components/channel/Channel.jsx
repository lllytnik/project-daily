import s from './Channel.module.css';

function Channel(props) {
    return (
        <div className={s.channel}>
            <img className={s.thumbnaiImg} src={props.thumbnail} alt="news"/>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    );
}

export default Channel;
