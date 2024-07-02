import image from '../../public/images/welcome-image.png'

export default function NotFound () {

  return (
    
      <div className="not-found">
        <img src={image} />
        <p>Página no encontrada</p>
      </div>
    
  )
}