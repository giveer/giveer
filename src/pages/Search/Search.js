import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Search.css'
import SearchCard from './SearchCard'
import SearchNavbar from './SearchNavbar'

function Search() {
  const { query } = useParams();

  // Set the recent searches in localStorage
  const [recentSearches, setRecentSearches] = useState(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    return storedSearches ? JSON.parse(storedSearches) : [];
  });

  useEffect(() => {
    if (!recentSearches.includes(query)) {
      setRecentSearches((prevSearches) => [query, ...prevSearches.slice(0, 4)]);
    }else{
      recentSearches.splice(recentSearches.indexOf(query), 1);
      setRecentSearches((prevSearches) => [query, ...prevSearches.slice(0, 4)]);
    }
  }, [query]);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  let jsonData = [
    {
      id: 1,
      profileImage: "https://media.licdn.com/dms/image/D5635AQEcWfVfh7zE2g/profile-framedphoto-shrink_400_400/0/1704634962889?e=1705849200&v=beta&t=CfRQTG1pN_fskMqvZFCaNs0Xqj9uERRF1eM8AeoE7mk",
      profileName: "Yokesh",
      postedDate: "24 Hours",
      userLevel: 2,
      image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
      productName: "T Shirt",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    },
    {
      id: 2,
      profileImage: "https://media.licdn.com/dms/image/D4D03AQFG_8DQOV3Leg/profile-displayphoto-shrink_200_200/0/1704385557741?e=1710979200&v=beta&t=8Nm4YdRSX-noRnpW0tMUt6CrCgXoBb2Sw662OMYdl8o",
      profileName: "Gokulraj",
      postedDate: "2 Days",
      userLevel: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      productName: "Headset",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    },
    {
      id: 4,
      profileImage: null,
      profileName: "Sounthar",
      postedDate: "2 Months",
      userLevel: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "White whatch",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    },
    {
      id: 5,
      profileImage: null,
      profileName: "Priya",
      postedDate: "2 Weeks",
      userLevel: 1,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productName: "T Shirt",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    },
    {
      id: 6,
      profileImage: null,
      profileName: "Yokesh",
      postedDate: "1 Weak",
      userLevel: 0,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      productName: "T Shirt",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    },
    {
      id: 7,
      profileImage: "https://revsportz.in/wp-content/uploads/2023/04/Rohit-Sharma-1024x536.jpeg",
      profileName: "Rohit",
      postedDate: "21 Year",
      userLevel: 0,
      image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
      productName: "T Shirt",
      ProductDiscription: "Branded t-shirt blue and black color mixed size M."
    }
  ]
  return (
    <div className='main-search'>
      <SearchNavbar query={query} />
      {jsonData.map(data => (
        <SearchCard product={data} />
      ))}


    </div>
  )
}

export default Search