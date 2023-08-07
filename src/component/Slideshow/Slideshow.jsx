import './slideshow.scss'
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import arrowRight from '../../assets/images/arrow-right.svg';
import arrowLeft from '../../assets/images/arrow-left.svg';


export default function Slideshow({pictures,alt}) {

    const sliderPictures = {pictures}.pictures;
    const [index, setIndex] = useState(0);
    //when autoSlide is false stops automatic sliding of pictures
    const [autoSlide, setAutoSlide] = useState(true);

    const totalPictures = sliderPictures.length

    useEffect(() => {
        if (totalPictures > 1 && autoSlide) {
          const interval = setInterval(() => {
            setIndex((index) => (index + 1) % totalPictures);
          }, 6000);
          return () => {
            clearInterval(interval);
          };
        }
      }, [totalPictures, autoSlide]);
    

    //when element is focused and enter is pressed,
    //calls the appropriate handleClick (for accessibility)
    //might need refactoring to reduce repetition
    const enterIncrease = e => {
      if (e.key === 'Enter') {
        handleClickIncrease();
      }
    };
    const enterDecrease = e => {
        if (e.key === 'Enter') {
            handleClickDecrease();
        }
      };

    const handleClickIncrease = () => {
        setIndex((index) => (index + 1) % totalPictures);
        setAutoSlide(false);
    }
    const handleClickDecrease = () => {
        setIndex((index) => (index - 1 + totalPictures) % totalPictures);
        setAutoSlide(false);
    }

    // if only one picture is present, hide the arrows and counter
    let hideArrows = false;
    if (totalPictures === 1){
        hideArrows = true
    }
    
    return (
        <div className="slideshow">
            <img className="current" src={sliderPictures[index]} alt={alt} />
            <img onClick={handleClickDecrease} onKeyDown={enterDecrease}
                className={`arrow arrow__left ${hideArrows ? "hide" : ''}`} 
                src={arrowLeft} alt={'précédent'} 
                tabIndex="0"
            />
            <img onClick={handleClickIncrease} onKeyDown={enterIncrease}
                className={`arrow arrow__right ${hideArrows ? "hide" : ''}`}
                src={arrowRight} alt={'suivant'} 
                tabIndex="0"
            />
            <p className={`counter text-center  ${hideArrows ? "hide" : ''}`}>
                {index + 1}/{sliderPictures.length}
            </p>
        </div>
      
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    alt: PropTypes.string.isRequired
};