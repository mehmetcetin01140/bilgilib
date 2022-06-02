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
import SearchResults from './components/SearchResults';
import AboutUs from './components/AboutUs';

function App() {
  
  return (
    <BrowserRouter >
    <Routes >
        <Route path="/*" element={<LayoutComp/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="konu/:konuadi" element={<EntryView/>}/>
        <Route path="kategoriler/:kategori/" element={<Categories/>}/>
        <Route path="kategoriler/:kategori/:kategoriicerik" element={<Categories/>}/>
        <Route path="search" element={<SearchResults/>}/>
        <Route path="hakkimizda" element={<AboutUs/>}/>
        </Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
