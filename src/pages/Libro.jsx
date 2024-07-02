import { useParams } from "react-router-dom";
import "../styles/Libro.css";
import books from "../books.json";
import imageBehind from "/images/welcome-image.png";
import { useState } from "react";
import more from "/images/more.png"
import less from "/images/less.png"
import SwipeView from "../components/SwipeView";

export default function Libro(){
  const {bookId} = useParams();
  const book = books.find( book => book.id === bookId);
  const [openText, setOpenText] = useState(false)
  const images = books.map(element => element.image)


  function handleDownload() {
    /* axios({
      url: book.downloadLink,
      method: 'GET',
      responseType: 'blob' // Indica a axios que la respuesta debe ser un blob
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        saveAs(blob, `${book.title}, ${book.author}.pdf`);
      })
      .catch((error) => {
        console.log('Error al descargar el archivo:', error);
      }); */

    //Borrar axios y file-saver si no usaré download

    window.open(book.downloadLink, '_blank');

  }

  function handleGet() {
    window.open(book.buyLink, '_blank');
  }

  return (
    <>
      <img src={imageBehind} id="center-image"/>
      
      <div className="book-container">
        <img src={openText? less : more} className="more-button" onClick={() => setOpenText(prev => !prev)}/>

            <h2>{book.title}</h2>
            <h3>{book.subtitle}</h3>
            <hr/>
            <h4>{book.author}</h4>

            <div className="image-paragraph-container">
           
              <div className="image-info-container">
                <img src={book.image} alt="book-picture" className="main-book-image"/>
                <div>{ `ISBN: ${book.isbn}` }</div>
                <div>{`${book.pages} páginas` }</div>
                <div>{`${book.year}` }</div>
              </div>
           
              <div className={ `buttons-and-text ${openText? "text-open" : ""} `}>
                <div className="book-buttons">
                  <button onClick={handleDownload}>Descargar PDF</button>
                  <button onClick={handleGet}>Impreso</button>
                </div>
                <p>{book.description}</p>

              </div>
           
            </div>

      </div>
      

    </>
  )
}
