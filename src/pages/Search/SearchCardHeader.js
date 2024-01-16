import React from 'react'
import Share from '../Icons/Share'
import './SearchCardHeader.css'

function SearchCardHeader(props) {
    const { product } = props
    const { id, profileImage, profileName, postedDate, userLevel, image, productName, ProductDiscription } = product
    const levelColor = ["#551a8b", "#06d6a0", "#ffcf1e"];

    const getInitials = (name) => {
        return name ? name.charAt(0).toUpperCase() : 'G';
    }

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const getContrastColor = (hexColor) => {
        const threshold = 130;
        const rgb = parseInt(hexColor.slice(1), 16);
        const brightness = ((rgb >> 16) * 299 + (rgb >> 8 & 255) * 587 + (rgb & 255) * 114) / 1000;

        return brightness > threshold ? '#000' : '#fff';
    }

    const renderUserAvatar = () => {
        if (profileImage) {
            return <img src={profileImage} alt='User Profile' />
        } else {
            const initials = <i class="fa-duotone fa-user"></i>; //getInitials(profileName)
            const backgroundColor = getRandomColor();
            const textColor = getContrastColor(backgroundColor);

            return (
                <div
                  style={{ backgroundColor, color: textColor }}
                >
                  {initials}
                </div>
            );
        }
    }
    return (
        <div className='main-searchcardheader'>
            <div className='product-card-head'>
                <div className='product-card-head-left'>
                    <div className='product-card-profile'>{renderUserAvatar()}
                    </div>
                    <div className='product-card-details'>
                        <p className='product-card-name'><span>{profileName}</span><span>{userLevel == 0 ? "" : <i class="fa-solid fa-badge-check" style={{ color: levelColor[userLevel - 1] }}></i>}</span></p>
                        <p className='product-card-date'>{postedDate}</p>

                    </div>
                </div>
                <div className='product-card-head-right'>
                    <div className='product-card-share'>
                        <Share url="https://www.giveers.com" title={productName} text={ProductDiscription} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchCardHeader