import './App.css';
import Client from './components/client';
import Contact from './components/contact';
import Header from './components/header';
import Introduction from './components/intro';
import Rightscpy from './components/rpage';
import Services from './components/services';

function App() {
  return (
    <div className="App"style={{backgroundColor:"rgba(238,237,236,255)"}}>

      <Header />
      <Introduction />
      <Client />
      <Services />
      <Contact />
      <Rightscpy />
    </div>
  );
}

export default App;
