import s from './App.module.css';
import Headliner from './assets/components/headliner/Headliner';
import BlockTitle from './assets/components/block-title/BlockTitle';
import News from './assets/components/news/News';
import Channel from './assets/components/channel/Channel';
import pic from './assets/images/headliner/pic.png';
import pic2 from './assets/images/headliner/pic-2.png';
import pic3 from './assets/images/headliner/pic-3.png';
import pic4 from './assets/images/headliner/pic-4.png';
import pic5 from './assets/images/headliner/pic-5.png';
import pic6 from './assets/images/headliner/pic-6.png';
import picNews from './assets/images/featured-news/pic.jpg'
import picNews2 from './assets/images/featured-news/pic-2.jpg'
import picNews3 from './assets/images/featured-news/pic-3.jpg'
import chennelIcon from './assets/images/channel/pic.png';
import chennelIcon2 from './assets/images/channel/pic2.png';
import chennelIcon3 from './assets/images/channel/pic3.png';
import chennelIcon4 from './assets/images/channel/pic4.png';
import chennelIcon5 from './assets/images/channel/pic5.png';
import chennelIcon6 from './assets/images/channel/pic6.png';



function App() {
  return (
    <div className={s.app}>
      <header className={s.header}></header>
      <aside className={s.sidebar}></aside>
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
            <News thumbnail={picNews} title="Travellers to pay more than $2K, Trudeau says" labelText="BBC NEWS" time="2:00 pm"/>
            <News thumbnail={picNews2} title="Travellers to pay more than $2K, Trudeau says" labelText="CNN NEWS" time="2:00 pm"/>
            <News thumbnail={picNews3} title="Travellers to pay more than $2K, Trudeau says" labelText="BBC NEWS" time="2:00 pm"/>
          </div>
        </section>

      </main>



    </div>
  );
}

export default App;
