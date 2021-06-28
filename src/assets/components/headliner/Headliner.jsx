import s from './Headliner.module.css';
import likeIcon from '../../../assets/images/headliner/like.svg';
import dislikeIcon from '../../../assets/images/headliner/dislike.svg';
import ArticleTitle from '../article-title/ArticleTitle';
import Lable from '../lable/Lable';
import Time from '../time/Time';



function Headliner(props) {
    return (
        <article className={s.headliner}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
            <div className={s.info}>
                <ArticleTitle title={props.title} />
                <div className={s.rating}>
                    <div className={s.like}>
                        <img className={s.likeIcon} src={likeIcon} alt="" />
                        <span>{props.likes}k</span>
                    </div>
                    <div className={s.dislike}>
                        <img className={s.dislikeIcon} src={dislikeIcon} alt="" />
                        <span>{props.dislikes}k</span>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <Lable labelText={props.labelText} />
                    <Time time={props.time} />
                </div>
            </div>
        </article>
    );
}

export default Headliner;
