import s from './App.module.css';
import Headliner from './assets/components/headliner/Headliner';
import BlockTitle from './assets/components/block-title/BlockTitle';
import News from './assets/components/news/News';
import Channel from './assets/components/channel/Channel';
import Icon from './assets/components/sidebar/Item';
import SelectBlock from './assets/components/select-block/SelectBlock';
import SearchBlock from './assets/components/search-block/SearchBlock'
import Profile from './assets/components/profile/Profile';
import pic from './assets/images/headliner/pic.png';
import pic2 from './assets/images/headliner/pic-2.png';
import pic3 from './assets/images/headliner/pic-3.png';
import pic4 from './assets/images/headliner/pic-4.png';
import pic5 from './assets/images/headliner/pic-5.png';
import pic6 from './assets/images/headliner/pic-6.png';
import picNews from './assets/images/featured-news/pic.jpg';
import picNews2 from './assets/images/featured-news/pic-2.jpg';
import picNews3 from './assets/images/featured-news/pic-3.jpg';
import chennelIcon from './assets/images/channel/pic.png';
import chennelIcon2 from './assets/images/channel/pic2.png';
import chennelIcon3 from './assets/images/channel/pic3.png';
import chennelIcon4 from './assets/images/channel/pic4.png';
import chennelIcon5 from './assets/images/channel/pic5.png';
import chennelIcon6 from './assets/images/channel/pic6.png';
import logo from './assets/images/sidebar/logo.png';
import navIcon from './assets/images/sidebar/navigation/icon.svg';
import navIcon2 from './assets/images/sidebar/navigation/icon2.svg';
import navIcon3 from './assets/images/sidebar/navigation/icon3.svg';
import navIcon4 from './assets/images/sidebar/navigation/icon4.svg';
import navIcon5 from './assets/images/sidebar/navigation/icon5.svg';
import navIcon6 from './assets/images/sidebar/navigation/icon6.svg';
import navIcon7 from './assets/images/sidebar/navigation/icon7.svg';
import locationIcon from './assets/images/select-block/icon-location.svg';
import chartIcon from './assets/images/select-block/icon-chart.svg';
import calendarIcon from './assets/images/select-block/icon-calendar.svg';


function App() {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <SelectBlock style={{ marginRight: '18px' }} thumbnail={locationIcon} title="San Francisco, California" />
        <SelectBlock style={{ marginRight: '24px' }} thumbnail={chartIcon} title="Analysis" />
        <SelectBlock thumbnail={calendarIcon} title="Monthly" />
        <SearchBlock />
        <Profile />
      </header>


      <aside className={s.sidebar}>
        <a className={s.logoLink}>
          <img className={s.logoImg} src={logo} />
        </a>
        <div className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}><Icon title="Home" thumbnail={navIcon} /></li>
            <li className={s.item}><Icon title="Explore" thumbnail={navIcon2} /></li>
            <li className={s.item}><Icon title="Saved" thumbnail={navIcon3} /></li>
            <li className={s.item}><Icon title="Subscriptions" thumbnail={navIcon4} /></li>
            <li className={s.item}><Icon title="Messages" thumbnail={navIcon5} /></li>
            <li className={s.item}><Icon title="Settings" thumbnail={navIcon6} /></li>
            <li className={s.item}><Icon title="Logout" thumbnail={navIcon7} /></li>
          </ul>
        </div>
        <div className={s.strip}></div>
        <div className={s.info}>
          <button className={s.btnClose}></button>
          <div className={s.inner}>
            <span className={s.iconInfo}></span>
            <h4 className={s.title}>Subscribe to our
              new plan <a className={s.linkInfo} href="#">$25</a></h4>
            <h5 className={s.subTitle}>It is a limited time offer that will expire soon.</h5>
            <button className={s.btn}>Subscribe now</button>
          </div>
        </div>


      </aside>

      <main className={s.content}>

        <section className={s.channels}>
          <BlockTitle title="Explore Channels" />
          <div className={s.blockChannels}>
            <Channel thumbnail={chennelIcon} title="FOX NEWS" />
            <Channel thumbnail={chennelIcon2} title="CW6 NEWS" />
            <Channel thumbnail={chennelIcon3} title="ABC NEWS" />
            <Channel thumbnail={chennelIcon4} title="AL JAZEERA" />
            <Channel thumbnail={chennelIcon5} title="BBC NEWS" />
            <Channel thumbnail={chennelIcon6} title="CNN NEWS" />
          </div>
        </section>

        <section className={s.headliners}>
          <BlockTitle title="Today’s Headlines" />
          <div className={s.blockHeadliner}>
            <Headliner thumbnail={pic} title="Hate speech vs free speech" likes={10.8} dislikes={1.4} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic2} title="Ontario Liberal leadership" likes={10.8} dislikes={3.4} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic3} title="Victim of Scarborough" likes={20.8} dislikes={1.1} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic4} title="Mother who left her baby" likes={0} dislikes={20} labelText="ABC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic5} title="Mother of Stefanie Rengel" likes={10.8} dislikes={1.4} labelText="CW6 NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic6} title="World Cup: Popular items" likes={10.8} dislikes={1.4} labelText="CNN NEWS" time="2:00 pm" />
          </div>
        </section>

        <section className={s.featuredNews}>
          <BlockTitle title="Featured News" />
          <div className={s.blockNews}>
            <News thumbnail={picNews} title="Travellers to pay more than $2K, Trudeau says" labelText="BBC NEWS" time="2:00 pm" />
            <News thumbnail={picNews2} title="Travellers to pay more than $2K, Trudeau says" labelText="CNN NEWS" time="2:00 pm" />
            <News thumbnail={picNews3} title="Travellers to pay more than $2K, Trudeau says" labelText="BBC NEWS" time="2:00 pm" />
          </div>
        </section>
      </main>



    </div>
  );
}

export default App;
