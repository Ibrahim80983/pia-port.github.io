import './App.css';
import Header from './Container/Header';
import Profile from './Container/Profile';
import Portfolio1 from './Container/Portfolio1'
import Skills from './Container/Skills';
import Contact from './Container/Contact'
import Footer from './Container/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <div className='port'>
        <div className='intro'>
        <h1>Portfolio</h1>
        <p>A collection of my most recent works</p>
        </div>
        <Portfolio1/>
      </div>
      <Skills />
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
