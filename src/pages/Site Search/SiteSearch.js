import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SiteSearch.css'
import SiteSearchDefault from './SiteSearchDefault';
import SiteSearchLive from './SiteSearchLive';
function SiteSearch() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();

  const searching = (e) => {
    let val = e.target.value;
    if(val == "") {
      setDisplay(true)
    }else{
      setDisplay(false)
    }

    setSearch(val);
  }
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/q/${search}`);
    }
  };
  return (
    <main className='main-sitesearch'>
      <section className='search-bar'>
        <div><i class="fa-regular fa-chevron-left back-arrow"></i></div>
        <div className="g-input-field-div-1 search-bar-div">
          <label className='g-lable-1'><i class="fa-duotone fa-magnifying-glass g-input-icon-1"></i></label>
          <input type="search" name="search" id="search" value={search} onChange={(e) => searching(e)} onKeyDown={handleSearch} className="g-input-field-1" placeholder="Search and fulfill your needs.." />
        </div>
      </section>
      <div className={display?'display-block':'display-none'}>
        <SiteSearchDefault />
      </div>
      <div className={!display?'display-block':'display-none'}>
        <SiteSearchLive search={search}/>
      </div>
      
    </main>
  )
}

export default SiteSearch