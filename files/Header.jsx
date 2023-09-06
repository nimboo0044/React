import React, {useState} from 'react';
import './Header.css';

let isSearchTrue = true;
let isSideBarTrue = true;

function Header(){
  // states here...
  const [bar1, setBar1] = useState(null);
  const [bar2, setBar2] = useState(null);
  const [bar3, setBar3] = useState(null);
  const [sideBarBtn, setSideBarBtn] = useState(null);
  const [searchBar, setSearchBar] = useState(null);
  const [searchBarBtn, setSearchBarBtn] = useState(null);
  const [searchBarInp, setSearchBarInp] = useState({opacity: '0', width: '0'});
  const [searchVal, setSearchVal] = useState('');
  
  //functions here...
  const openSideBar = () => {
    setBar1({
      top: '45%',
      transform: 'rotate(45deg)'
    });
    setBar2({
      opacity: '0'
    });
    setBar3({
      top: '45%',
      transform: 'rotate(-45deg)'
    });
    setSideBarBtn({
      animation: 'br forwards 500ms linear'
    });
    isSideBarTrue = false;
  }
  
  const closeSideBar = () => {
    setBar1({
      top: '30%',
      transform: 'rotate(0)'
    });
    setBar2({
      opacity: '1'
    });
    setBar3({
      top: '60%',
      transform: 'rotate(0)'
    });
    setSideBarBtn({
      animation: 'brr forwards 500ms linear'
    });
      isSideBarTrue = true;
  }
  
  const openSearchBar = () => {
    setSearchBar({
      width: '40vw',
      borderRadius: '999px'
    });
    setSearchBarInp({
      oapcity: '1',
      width: '30vw'
    });
    isSearchTrue = false;
  }
  
  const closeSearchBar = () => {
    if(searchVal != ''){
      search()
    }else{
      setSearchBar({
        width: '8vw',
        boderRadius: '50% 40% 20% 40%'
      });
      setSearchBarInp({
        opacity: '0',
        width: '0'
      });
      isSearchTrue = true;
    }
  }
  
  //funtions in use
  const onBarIcon = () => {
    isSideBarTrue ? openSideBar() : closeSideBar();
  }
  
  const onSearchIcon = () => {
    isSearchTrue ? openSearchBar() : closeSearchBar();
  }
  
  const value = (props) => {
    setSearchVal(props)
  }
  
  const search = () => {
    alert(searchVal);
    setSearchVal('');
  }
  
  const show = () => {
    alert();
  }
  return(
    <header>
      <div className="sideBarBtn align" style={sideBarBtn} onClick = {onBarIcon}>
	      <span className="bar" style={bar1}></span>
	      <span className="bar" style={bar2}></span>
	      <span className="bar" style={bar3}></span>
      </div>
      <div className="title align">
	      <a href="./Home.jsx"> MyPage! </a>
      </div>
      <div className="searchBar" style={searchBar}>
        <input type="text" placeholder="Search" value={searchVal} onChange={(e)=> value(e.target.value)} style={searchBarInp} className="searchBarInp"/>
	      <div className="searchBarBtn align" style={searchBarBtn} onClick={onSearchIcon}>
	        <i className="fa fa-search"></i>
	      </div>   
      </div>
    </header>
  );
};

export default Header;
