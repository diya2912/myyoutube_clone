import React,{useState} from 'react';
import './Searchbar.css';
import {BsMicFill} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";
import Searchlist from './Searchlist';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Searchbar = () => {
    const [Searchqueary,setsearchqueary] = useState("")
    const [searchlist,setsearchlist] = useState(false)
    const Titlearray=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(Searchqueary?.toUpperCase())).map(m=>m?.videotitle)
    // const Titlearray=["video1","video2","animation video","movies"].filter(q=>q.toUpperCase().includes(Searchqueary.toUpperCase()))
  return (
    <>
    <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="search_div">
                <input type="text" className='iBox_SearchBar' placeholder='Search' onChange={e=>setsearchqueary(e.target.value)} value={Searchqueary} onClick={e=>setsearchlist(true)} />
                <Link to={`/search/${Searchqueary}`}>
                <FaSearch className='searchIcon_SearchBar'/>
                </Link>
                <BsMicFill className='Mic_SearchBar'/>
                {Searchqueary && searchlist && <Searchlist setsearchqueary={setsearchqueary} Titlearray={Titlearray}/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Searchbar