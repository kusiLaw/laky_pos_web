import './App.css';
import Header from './components/header/Header';



function App() {

  return (
    <div className='container'>
     <Header />
     <main className='main'>
        <section className='presentation' >
          <div className='features flex'>

             <div className='features_text'>
                <h1>LAKY POS FOR SMALL AND LARGE BUSINESSES</h1>
                <p className=''>
                   Fast, Scalable, and Results Driven Email API's Built for Developers
                </p>
             </div>

             <div className='features_img'>
                 <img src={require(`./asserts/images/Capture.PNG`)} alt = '' className='app_photo left'/>
                 {/* <img src={require(`./asserts/images/Capture5.PNG`)} alt = '' className='app_photo right'/> */}
                 <img src={require(`./asserts/images/Capture2.PNG`)} alt = '' className='app_photo center'/>
                 {/* <img src={require(`./asserts/images/Capture3.PNG`)} alt = '' className='app_photo b-right'/>
                 <img src={require(`./asserts/images/Capture4.PNG`)} alt = '' className='app_photo b-left'/> */}

             </div>

          </div>
        </section>
     </main>
     
    </div>
  );
}

export default App;
