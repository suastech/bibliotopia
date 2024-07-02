import '../styles/SwipeView.css'
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';


const SwipeView = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
console.log(images)

  const handleSwipe = ({ dir }) => {
    if (dir === 'Left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (dir === 'Right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe({ dir: 'Left' }),
    onSwipedRight: () => handleSwipe({ dir: 'Right' }),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers} className="swipe-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="swipe-image" />
    </div>
  );
};

export default SwipeView;
