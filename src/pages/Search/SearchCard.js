import React from 'react'
import PropTypes from 'prop-types'
import './SearchCard.css'
import Favorite from '../Icons/Favorite'
import Share from '../Icons/Share'
import SearchCardHeader from './SearchCardHeader'
import { Link } from 'react-router-dom'

function SearchCard(props) {
    const { product } = props
    const { id, profileImage, profileName, postedDate, userLevel, image, productName, ProductDiscription } = product
    const link = "/product?id="+id;
    return (
        <div className='main-searchcard'>
            <div className='product-card' index={id}>
                <SearchCardHeader product={product}/>
                <div className='product-image-div'>
                    <img src={image} alt={`Product ${id}`} className='product-image' />
                </div>
                <div>
                    <p className='product-name'>{productName}</p>
                </div>
                <div>
                    <p className='product-disc'>{ProductDiscription}</p>
                </div>
                <div className='product-buttons'>
                    <button className='request-btn'>Request</button>
                    <div className='fav-icon'>
                        <Favorite name={id} />
                    </div>
                    <Link to={link} className='view-btn'>View</Link>
                </div>
            </div>
        </div>
    )
}

SearchCard.propTypes = {}

export default SearchCard
