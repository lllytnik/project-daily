import s from './Profile.module.css';
import avatar from '../../images/profile/avatar.jpg'

function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.burgerMenu}>
                <button className={s.btn}></button>
            </div>
            <img className={s.avatar} src={avatar}/>
        </div>
    );
}

export default Profile;
