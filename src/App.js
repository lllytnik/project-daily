import './App.css';
import Headliner from './assets/components/headliner/Headliner';
import pic from './assets/images/headliner/pic.png';
import pic2 from './assets/images/headliner/pic-2.png';
import pic3 from './assets/images/headliner/pic-3.png';
import pic4 from './assets/images/headliner/pic-4.png';
import pic5 from './assets/images/headliner/pic-5.png';
import pic6 from './assets/images/headliner/pic-6.png';


function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <aside className="sidebar"></aside>
      <main className="content">
        <section className="headliners">
          <h2 className="block-title">Today’s Headlines</h2>
          <div className="block-content">
            <Headliner thumbnail={pic} title="Hate speech vs free speech" likes={10.8} dislikes={1.4} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic2} title="Ontario Liberal leadership" likes={10.8} dislikes={3.4} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic3} title="Victim of Scarborough" likes={20.8} dislikes={1.1} labelText="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic4} title="Mother who left her baby" likes={0} dislikes={20} labelText="ABC NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic5} title="Mother of Stefanie Rengel" likes={10.8} dislikes={1.4} labelText="CW6 NEWS" time="2:00 pm" />
            <Headliner thumbnail={pic6} title="World Cup: Popular items" likes={10.8} dislikes={1.4} labelText="CNN NEWS" time="2:00 pm" />
          </div>

        </section>
      </main>



    </div>
  );
}

export default App;
