import "../styles/Contacto.css";
import { toast, ToastContainer } from "react-toastify";
import { TextField, Button, Container, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(formData.email).toLowerCase())) {
      toast.error("Invalid email address", {
        className: "custom-toast",
        bodyClassName: "custom-toast-container",
      });
      return;
    }
    setIsLoading(true)

    emailjs
      .sendForm("service_zlzok61", "template_mdga1xg", formRef.current, {
        publicKey: "hnPNkDjQXdQhSTL0s",
      })
      .then(() => {
        toast.success(
          "Gracias por escribir. Nos pondremos en contacto tan pronto como nos sea posible😊",
          {
            className: "custom-toast",
            bodyClassName: "custom-toast-container",
            autoClose: 3000,
            isClosable: true,
            position: "top-center",
          }
        );
        setIsLoading(false)
        setFormData({
          name: "",
          email: "",
          content: "",
        });
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error("Internal server error. Please try again later", {
          className: "custom-toast",
          bodyClassName: "custom-toast-container",
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="contact-container">
      
      {isLoading && 
      <div className="loading-container">
        <span className="loading-effect"></span>
      </div>
    }

      <Container
        maxWidth="sm" className={isLoading? "disabled-box":""}
        sx={{ p: 1, backgroundColor: "white", borderRadius: "10px" }}
      >
        <Typography
          variant="h3 "
          component="h3"
          sx={{ mt: 1, mb: 1 }}
          gutterBottom
        >
          ¿Alguna idea para publicar?
        </Typography>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
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
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
      </Container>

      <ToastContainer />
    </div>
  );
}
