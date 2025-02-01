import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Box2Image from "../assets/fe2301a10103d27433cbf0b8c65c088c.png";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactUsBox = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",
  //   height: "100vh",
  //   overflow: "hidden",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: "40%",
});

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //   border: "1px solid black",
  backgroundColor: "#1a1a1a",
  width: "calc(100% - 40px)",
  zIndex: 2,
  borderRadius: "10px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
  padding: "25px 0px",
  marginBottom: "100px",
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    "&>p:nth-of-type(1)": {
      color: "white",
      fontSize: "20px",
    },
  },
}));

const RequestType = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  //   border: "1px solid black",
  backgroundColor: "#1a1a1a",
  width: "calc(100% - 40px)",
  marginTop: "10px",
  //   height: "100px",
  zIndex: 2,
  borderRadius: "10px",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontSize: "20px",
    textTransform: "uppercase",
    margin: "10px 0px",
  },
  "&>input": {
    width: "calc(100% - 60px)",
    // height: "100px",
    backgroundColor: "#0f0f0f",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: "30px 30px",
    color: "white",
    "&::placeholder": {
      fontSize: "14px",
      color: "#676665",
    },
  },
  "&>textarea": {
    width: "calc(100% - 60px)",
    height: "70px",
    backgroundColor: "#0f0f0f",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    padding: "30px 30px",
    resize: "none",
    color: "white",
    "&::placeholder": {
      fontSize: "14px",
      color: "#676665",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   border: "1px solid black",
  background: "linear-gradient(to bottom, #f8990b, #925a06)",
  width: "calc(100% - 40px)",
  padding: "15px 0px",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.5)",
  marginTop: "30px",
}));
const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formValid = true;
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (name.trim() === "") {
      nameError = "Name is required.";
      formValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
      emailError = "Email is required.";
      formValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "Please enter a valid email address.";
      formValid = false;
    }

    if (message.trim() === "") {
      messageError = "Message is required.";
      formValid = false;
    }

    setErrors({ name: nameError, email: emailError, message: messageError });

    return formValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    toast.success("Thank's We Will Contact You", 3000);

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <ContactUsBox>
      <ImageBackground src={Box2Image} alt="Background Image" />
      <FormBox>
        <form onSubmit={handleSubmit}>
          <Typography>GET IN TOUCH</Typography>
          <RequestType>
            <Typography>Name</Typography>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && (
              <Typography color="error">{errors.name}</Typography>
            )}
          </RequestType>
          <RequestType>
            <Typography>Email</Typography>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && (
              <Typography color="error">{errors.email}</Typography>
            )}
          </RequestType>

          <RequestType>
            <Typography>Message</Typography>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message Here ....."
            />
            {errors.message && (
              <Typography color="error">{errors.message}</Typography>
            )}
          </RequestType>
          <SubmitButton
            type="submit"
            onClick={(e) => handleSubmit(e)}
            variant="contained"
          >
            send your message
          </SubmitButton>
        </form>
      </FormBox>
    </ContactUsBox>
  );
};

export default ContactUsForm;
