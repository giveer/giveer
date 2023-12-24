import './Home.css';
import image1 from '../../assets/slider/Slide_1.jpg'
import image2 from '../../assets/slider/Slide_2.jpg'
import image3 from '../../assets/slider/Slide_3.jpg'
import image4 from '../../assets/slider/Slide_4.jpg'
import image5 from '../../assets/slider/Slide_5.jpg'
import image6 from '../../assets/slider/Slide_6.jpg'

function Home() {
    return (
        <main className="main">
            <h2 className="tagline">Don't trash it, <span>GIVEER</span> it!</h2>
            <section className="main-slide">
                <div className="slider-wrapper">
                    <div className="slider">
                        <img id='slide-1' src={image1} alt='slide-1'></img>
                        <img id='slide-2' src={image2} alt='slide-2'></img>
                        <img id='slide-3' src={image3} alt='slide-3'></img>
                        <img id='slide-4' src={image4} alt='slide-4'></img>
                        <img id='slide-5' src={image5} alt='slide-5'></img>
                        <img id='slide-6' src={image6} alt='slide-6'></img>
                    </div>
                    <div className='slider-nav'>
                        <a href='#slide-1'></a>
                        <a href='#slide-2'></a>
                        <a href='#slide-3'></a>
                        <a href='#slide-4'></a>
                        <a href='#slide-5'></a>
                        <a href='#slide-6'></a>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home;