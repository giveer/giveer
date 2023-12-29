import './Product_post.css';
import { Link } from 'react-router-dom';

function Product_post(){
    return (
        <div className='main-product-post'>
            <div className='topic'>
                <span className='span1'><Link to='/profile'><i class="fa-regular fa-arrow-left"></i></Link></span><span className='span2'>Product Posted</span>
            </div>
            <div className='split'>
                <div className='odis com'>On Display</div><div className='giv com'>Given</div>
            </div>
        </div>
    );
}

export default Product_post;