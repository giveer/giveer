import React, { useState, useEffect } from 'react'
import './Product.css'
import Navbar2 from '../navbar/Navbar2'
import SearchCardHeader from '../Search/SearchCardHeader'
import ImageGallery from "react-image-gallery"; //https://www.npmjs.com/package/react-image-gallery
import Favorite from '../Icons/Favorite'
import NumberAnimation from '../Animation/Number/NumberAnimation';

function Product() {
    let jsonData = [
        {
            id: 2,
            profileImage: "https://media.licdn.com/dms/image/D5635AQEcWfVfh7zE2g/profile-framedphoto-shrink_400_400/0/1704634962889?e=1705849200&v=beta&t=CfRQTG1pN_fskMqvZFCaNs0Xqj9uERRF1eM8AeoE7mk",
            profileName: "Yokesh",
            postedDate: "24 Hours",
            userLevel: 2,
            image: [
                {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                },
                {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                },
                {
                    original: "https://picsum.photos/id/1019/1000/600/",
                    thumbnail: "https://picsum.photos/id/1019/250/150/",
                },
                {
                    original: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
                    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
                },
                {
                    original: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
                    thumbnail: "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
                },
                {
                    original: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    thumbnail: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            ],
            counts: [
                {
                    request: 10,
                    chat: 7,
                    favorite: 33,
                    chance: 90
                }
            ],
            productName: "Sunny Day Yellow Comfort Tee (Size L)",
            ProductDiscription: "Embrace the warmth of sunshine with our Sunny Day Yellow Comfort Tee in size L. Crafted from premium cotton, this vibrant yellow T-shirt not only adds a pop of color to your wardrobe but also provides unparalleled comfort. The relaxed fit and soft fabric make it an ideal choice for casual outings, lounging, or pairing with your favorite jeans. Elevate your style with this cheerful tee that effortlessly combines fashion and ease. Stand out in the crowd while enjoying the relaxed feel of this sunny wardrobe essential.",
            location: "salem"
        }
    ]

    const [favorite, setFavorite] = useState(jsonData[0].counts[0].favorite);

    const increaseCount = () => {
        const checkbox = document.getElementById("checkbox" + jsonData[0].id);
        if(checkbox.checked && favorite==jsonData[0].counts[0].favorite){
            setFavorite(favorite+1)
        }
        if(checkbox.checked && favorite==jsonData[0].counts[0].favorite+1){
            setFavorite(favorite-1)
        }
    }
  

  useEffect(() => {
    console.log('Favorite Count:', favorite);
  }, [favorite]);
    return (
        <div className='main-product'>
            <Navbar2 />
            <div className='head'>
                <SearchCardHeader product={jsonData[0]} />
            </div>
            <div className='slider'>
                <ImageGallery items={jsonData[0].image} showNav={false} showPlayButton={false} showFullscreenButton={false} />
            </div>
            <div className='product-counts'>
                <div className='product-count'>
                <i class="fa-solid fa-octagon"></i>
                    <NumberAnimation endValue={jsonData[0].counts[0].request} />
                    <span className='product-count-name'>Request</span>
                </div>
                <div className='product-count'>
                <i class="fa-solid fa-comment"></i>
                    <NumberAnimation endValue={jsonData[0].counts[0].chat} />
                    <span className='product-count-name'>Chat</span>
                </div>
                <div className='product-count'>
                <i class="fa-solid fa-heart"></i>
                    <NumberAnimation endValue={favorite} />
                    <span className='product-count-name'>Favorite</span>
                </div>
                <div className='product-count'>
                <i class="fa-solid fa-badge"></i>
                    <NumberAnimation endValue={jsonData[0].counts[0].chance} symbol={"%"}/>
                    <span className='product-count-name'>chance %</span>
                </div>
            </div>
            <div className='product-details'>
                <p className='product-name'>{jsonData[0].productName}</p>
                <p className='product-location'><i class="fa-solid fa-location-dot"></i>{jsonData[0].location}</p>
                <div className='product-discription'>
                    <p className='product-discription-1'>Details</p>
                    <p className='product-discription-2'>{jsonData[0].ProductDiscription}</p>
                </div>
            </div>
            <div className='product-button'>
                <button className='chat-btn'>Chat</button>
                <div className='fav-icon' onClick={increaseCount}>
                    <Favorite name={jsonData[0].id} />
                </div>
                <button className='request-btn'>Request</button>
            </div>
        </div>
    )
}

export default Product