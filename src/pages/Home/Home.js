// import '/Home.css';
import './Home.css';
import { useState, useEffect } from 'react';
import myImage from '../../assets/images/01-01.png';
function Home(){
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
    
    setImageUrl('../../assets/images/01-01.png');
}, []);
    
    return(
        <main className="main">
            <h2 className="tagline">Don't trash it, <span>GIVEER</span> it!</h2>
            <img src={imageUrl} alt="Description" />
        </main>
    )
}
export default Home