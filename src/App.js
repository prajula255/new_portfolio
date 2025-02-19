import './App.css';
import Contact from './components/contact';
import Header from './components/header';
import Introduction from './components/intro';
import Logos from './components/logos';
import Rightscpy from './components/rpage';
import Services from './components/services';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgba(238,237,236,255)" }}>
      
      <Header />
      <Introduction />
      <Logos />
    
      <Services />
      <Contact />
      <Rightscpy />
    </div>

  );
}

export default App;
