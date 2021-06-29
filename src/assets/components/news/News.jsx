import s from './News.module.css';
import ArticleTitle from '../article-title/ArticleTitle';
import Lable from '../lable/Lable';
import Time from '../time/Time';


function News(props) {
    return (
        <article className={s.news}>

            <img className={s.thumbnailImg} src={props.thumbnail} alt="" />

            <div className={s.info}>
                <ArticleTitle title={props.title} />
                <div className={s.wrapper}>
                <Lable style={{minWidth:'75px'}} labelText={props.labelText} />
                <Time time={props.time}/>
                </div>
            </div>

        </article>
    );
}

export default News;
