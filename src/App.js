import './App.css';
import Header from './components/header/Header';

function App() {

  const s = (num) =>{
  let l = []
   let i = 0
   while(i < num){
    l.push('gjggigi')
    i += 1
   }
   return l
  }
  return (
    <div className='container'>
     <Header />
     {
      s(80).map(el => <div>el</div>)
     }
    </div>
  );
}

export default App;
