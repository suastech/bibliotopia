import "../styles/CarouselHome.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

export default function CarouselHome({books}) {
  const navigate = useNavigate()

  function handleSee(id) {
    navigate(`/libro/${id}`)
  }

  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop={true}
        interval={5000}
/*         autoPlay={true}
 */        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
      >
      {books.map((element, index) => {
        return (
        <div key={index} className="item-slide">
        
          <div className="image-slide-box">
            <div style={{width:"80%", margin:"auto auto"}}><img src={element.image} onClick={() => handleSee(element.id)}/></div>
          </div>
          
          <div className="description-slide" onClick={() => handleSee(element.id)}>

            <div className="description-text">
              <h2>{element.title}</h2>
              <h3>{element.subtitle}</h3>
              <hr/>
              <h4>{element.author}</h4>
              <p>{element.shortDescription}</p>
            </div>

       
          </div>
          
       </div>
      )
      })
      }
      </Carousel>
    </div>
  )
}