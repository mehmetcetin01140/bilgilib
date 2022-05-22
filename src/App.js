import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Categories from './components/Categories';
import EntryView from './components/EntryView';
import FooterComp from './components/FooterComp';
import LayoutComp from './components/LayoutComp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.scss"

function App() {
  
  return (
    
    <BrowserRouter >
    <Routes >
    
        <Route path="/*" element={<LayoutComp/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="deneme/:dene" element={<EntryView/>}/>
        <Route path="kategoriler/:kategori/" element={<Categories/>}/>
        <Route path="kategoriler/:kategori/:sa" element={<Categories/>}/>
        </Route>
    
   
    </Routes>
 </BrowserRouter>
  );
}

export default App;
