import './Product_post.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import $ from 'jquery';
 
function Product_post(){
    // const [showOnDisplay, setShowOnDisplay] = useState(true);

    // const handleSwipe = (direction) => {
    //     if (direction === 'left') {
    //         setShowOnDisplay(false);
    //     } else if (direction === 'right') {
    //         setShowOnDisplay(true);
    //     }
    // };
    // const handleClick1 = () => {
    //     console.log('clicked on display');
    //     // document.getElementsByClassName('odis-content').style.transform = 'translateX(0%)';
    // }
    // const handleClick2 = () => {
    //     console.log('clicked given');
    //     // document.getElementsByClassName('odis-content').style.transform = 'translateX(-100%)';
    // }

    $(document).ready(function(){
        $('ul.tabs').tabs({
          swipeable : true,
          responsiveThreshold : 1920
        });
      });

    return (
        <div className='main-product-post'>
            <div className='topic'>
                <span className='span1'><Link to='/profile'><i class="fa-regular fa-arrow-left"></i></Link></span><span className='span2'>Product Posted</span>
            </div>
            <div className='split'>
                <div className='odis com'>On Display</div>
                <div className='giv com'>Given</div>
            </div>
            {/* <div className='content'>
                <div className='odis-content'>
                    <div className='o-c-c'>On Display</div>
                </div>
                <div className='giv-content'>
                    <div className='g-c-c'>Given</div>
                </div>
            </div> */}
            <ul id="tabs-swipe-demo" class="tabs">
                <li class="tab col s3"><a href="#swipe-1">Test 1</a></li>
                <li class="tab col s3"><a class="active" href="#swipe-2">Test 2</a></li>
                <li class="tab col s3"><a href="#swipe-3">Test 3</a></li>
            </ul>
            <div id="swipe-1" class="col s12 blue">First tab content</div>
            <div id="swipe-2" class="col s12 red">Second tab content</div>
            <div id="swipe-3" class="col s12 green">Third tab content</div>
        </div>
    );
}

export default Product_post;