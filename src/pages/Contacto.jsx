import "../styles/Contacto.css"
import { toast, ToastContainer } from 'react-toastify';
import { TextField, Button, Container, Typography} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (! re.test(String(formData.email).toLowerCase()) ) {
      toast.error('Invalid email address', {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-container'
        }
      );
      return;
    }
  };


  return (
    <div className="contact-container">

    <Container maxWidth="sm" sx={{ p: 1, backgroundColor: "white", borderRadius: "10px" }}>
      <Typography variant="h3 " component="h3" sx={{ mt: 1, mb:1}} gutterBottom>
      ¿Alguna idea para publicar? 
      </Typography>
      <form onSubmit={handleSubmit}>
        <div >
        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>

        <TextField
          fullWidth
          margin="normal"
          label="Mensaje..."
          name="content"
          multiline
          rows={4}
          value={formData.content}
          onChange={handleChange}
          required
        />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Enviar
          </Button>
      </form>
    </Container>
    
    <ToastContainer />
      
    </div>

  )
}