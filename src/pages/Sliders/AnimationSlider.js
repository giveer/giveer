import React from 'react'
import './AnimationSlider.css'
import image1 from '../../assets/slider/Slide_1.jpg'
import image2 from '../../assets/slider/Slide_2.jpg'
import image3 from '../../assets/slider/Slide_3.jpg'
import image4 from '../../assets/slider/Slide_4.jpg'
import image5 from '../../assets/slider/Slide_5.jpg'
import image6 from '../../assets/slider/Slide_6.jpg'

function AnimationSlider() {
    const styles1 = {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        marginRight: '15%',
        marginBottom: '1rem',
        marginLeft: '15%',
        listStyle: 'none'
      };
      const styles2 = {
        width: '15px',
        height: '8px',
        borderTop: '0',
        borderBottom: '0',
        borderRadius: '50px'
      };
  return (
    <div className="container" style={{width: '100vw', padding: '10px'}}>
            <div className="row justify-content-center">
                <div className="col-sm-8" style={{padding: 0}}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators" style={styles1}>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={styles2} id="fbtn"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={styles2} id="sbtn"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={styles2} id="tbtn"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" style={styles2} id="fobtn"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" style={styles2} id="fibtn"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" id="fimg">
                                <a href="./dog.php"><img src={image1} className="d-block w-100" alt="..." /></a>
                            </div>
                            <div className="carousel-item" id="simg">
                                <a href="./fish.php"><img src={image2} className="d-block w-100" alt="..." /></a>
                            </div>
                            <div className="carousel-item" id="timg">
                                <a href="./cat.php"><img src={image3} className="d-block w-100" alt="..." /></a>
                            </div>
                            <div className="carousel-item" id="foimg">
                                <a href="./dog.php"><img src={image4} className="d-block w-100" alt="..." /></a>
                            </div>
                            <div className="carousel-item" id="fiimg">
                                <a href="./slider1"><img src={image5} className="d-block w-100" alt="..." /></a>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AnimationSlider