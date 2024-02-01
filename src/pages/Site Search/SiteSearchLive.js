import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SiteSearchLive.css'

function SiteSearchLive({search}) {
    const [liveSearches, setLiveSearches] = useState([]);
    useEffect(() => {
        //API for fetching live searches
        setLiveSearches([
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
        <main className='main-sitesearchlive'>
            <section className='live-search'>
                <ul className='live-searches'>
                    {
                        liveSearches.map((data, index) => (
                            <li key={index}>
                                <Link to={'/search?q=' + data.keyword} className='live-search-li'>
                                    <i class="fa-regular fa-magnifying-glass"></i>
                                    <span>{data.keyword}</span>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </section>
        </main>
    )
}

export default SiteSearchLive