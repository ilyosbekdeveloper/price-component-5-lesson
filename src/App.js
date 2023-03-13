import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Components/Card';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        <Header />

      <section>
        <Description />
      </section>
      <section>
        <Card/>
      </section>
      
      <footer className="pt-4 my-md-5 pt-md-5 border-top footer">
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
