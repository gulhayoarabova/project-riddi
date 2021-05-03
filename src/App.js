import './App.css';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurShirts from './components/ourShirts/OurShirts'
import Shop from './components/shop/Shop';
import ShopItem from './components/shopItem/ShopItem';
import AboutPage from './components/about/aboutPage';
import HowToSelectCustomShirt from './components/how-to-select-custom-shirt/how-to-select-custom-shirt';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/ourShirts" component={OurShirts} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shopItem" exact component={ShopItem}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/shopItem" exact component={ShopItem}/>
        <Route path="/selectCustomShirt" exact component={HowToSelectCustomShirt}/>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;