import './App.css';
import Client from './components/client';
import Contact from './components/contact';
import Header from './components/header';
import Introduction from './components/intro';
import Services from './components/services';

function App() {
  return (
    <div className="App">

      <Header />
      <Introduction />
      <Client />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
