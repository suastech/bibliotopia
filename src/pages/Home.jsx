import "../styles/Home.css"
import books from "../books.json"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CarouselHome from "../components/CarouselHome";
import welcomeImage from "/images/welcome-image.png"

export default function Home () {
  const navigate = useNavigate();
  const [arrayToShow, setArrayToShow] = useState(books) 
  
  function seeBook(id) {
    navigate(`/libro/${id}`)
  }

  function filterArray(string) {
    let newArray = books.filter( element => 
      element.author.toLowerCase().includes(string.toLowerCase()) ||
      element.title.toLowerCase().includes(string.toLowerCase())
    )
    setArrayToShow(newArray) 
  }

  return (
    <>

      <div className="welcome-box">
        <div>BIBLIOTOPÍA</div>
        <img src={welcomeImage}/>
      </div>

      <CarouselHome books={books.slice(0,3)}/>
      <SearchBar filterArray={filterArray}/>
      <div className="book-grid">
        {arrayToShow.map( (book, index) => {
          return (
            <div key={index} className="book-item" onClick={() => seeBook(book.id)}>
              <div className="item-image-container">
                <img className="main-image" src={book.image} alt={book.image}/>
              </div>
              <div className="item-footer">
                <div className="title-book">{book.title}</div>
                <div className="author-book">{book.author}</div>
              </div>
            </div>
          )
        })
        }

      </div>
      
    </>
  )
}