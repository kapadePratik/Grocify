import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import OfferCard from './Components/OfferCard/OfferCard';
import Category from './Components/Category/Category';
import GroceryDisplay from './Components/GroceryDisplay/GroceryDisplay';
import Review from './Components/review/Review';
import MobileApp from './Components/mobileapp/MobileApp';
import Footer from './Components/Footer/Footer';
import Cardexample from './Components/cardexample/Cardexample';

function App() {
  return (
    <div className="App" style={{
      overflow:"hidden"
    }}>
      <Header />
      <Hero />
      <OfferCard />
      <Category />
      <GroceryDisplay />
      <Review />
      <MobileApp />
      <Footer />

      {/* <Cardexample /> */}
    </div>
  );
}

export default App;
