import './Headliner.css';
import likeIcon from '../../../assets/images/headliner/like.svg';
import dislikeIcon from '../../../assets/images/headliner/dislike.svg';
import clockIcon from '../../../assets/images/headliner/clock.svg';
import ArticleTitle from '../article-title/ArticleTitle';



function Headliner(props) {
    return (
        <article className="headliner">
            <img className="thumbnail-img" src={props.thumbnail} alt="" />
            <div className="info">
                <ArticleTitle title={props.title} />
                <div className="rating">
                    <div className="like">
                        <img className="like-icon" src={likeIcon} alt="" />
                        <span>{props.likes}k</span>
                    </div>
                    <div className="dislike">
                        <img className="dislike-icon" src={dislikeIcon} alt="" />
                        <span>{props.dislikes}k</span>
                    </div>
                </div>
                <div className="wrapper">
                    <span className="label">{props.labelText}</span>
                    <div className="time">
                        <img className="time-icon" src={clockIcon} alt="" />
                        <span>{props.time}</span>
                    </div>
                </div>

            </div>
        </article>
    );
}

export default Headliner;
