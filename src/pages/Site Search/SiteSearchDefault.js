import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SiteSearchDefault.css'
import { data } from 'jquery';

function SiteSearchDefault() {
    const [popularSearches, setPopularSearches] = useState([]);

    const [recentSearches, setRecentSearches] = useState(() => {
        const storedSearches = localStorage.getItem('recentSearches');
        return storedSearches ? JSON.parse(storedSearches) : [];
    })

    useEffect(() => {
        //API for fetching popular searches
        setPopularSearches([
            {
                keyword: "dress"
            },
            {
                keyword: "mobile"
            },
            {
                keyword: "book"
            },
            {
                keyword: "laptop"
            },
            {
                keyword: "watch"
            }
        ])
    }, [])
    return (
        <main className='main-sitesearchdefault'>
            <section className='recent-search' style={recentSearches.length === 0 ?{display: 'none'} : {display: 'block'}}>
                <p className='recent-search-title'>Recent Searches</p>
                <ul className='recent-searches'>
                    {
                        recentSearches.map((data, index) => (
                            <li key={index}>
                                <Link to={'/search/q/'+data} className='recent-search-li'>
                                    <i class="fa-regular fa-clock-rotate-left"></i>
                                    <span>{data}</span>
                                </Link>
                            </li>
                        ))
                    }
                    
                </ul>
            </section>
            <section className='popular-search'>
                <p className='popular-search-title'>Popular Searches</p>
                <ul className='popular-searches'>
                    {
                        popularSearches.map((data, index) => (
                            <li key={index}><Link to={'/search/q/' + data.keyword} className='popular-search-li'>{data.keyword}</Link></li>
                        ))
                    }

                </ul>
            </section>
        </main>
    )
}

export default SiteSearchDefault