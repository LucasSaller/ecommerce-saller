import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function Form({ handleSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChangeForm = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        marginTop: 2,
      }}
      noValidate
      autoComplete="off"
      display="flex"
      alignItems="center"
    >
      <TextField
        autoComplete="off"
        required
        id="outlined-required"
        label="Name"
        onChange={handleChangeForm}
        name="name"
      />
      <TextField
        autoComplete="off"
        required
        id="outlined-disabled"
        label="Phone"
        name="phone"
        onChange={handleChangeForm}
      />
      <TextField
        autoComplete="off"
        required
        label="Email"
        type="email"
        onChange={handleChangeForm}
        name="email"
      />
      <Button
        style={{ height: 55 }}
        variant="outlined"
        onClick={() => handleSubmit(formData)}
      >
        Terminar Compra
      </Button>
    </Box>
  );
}

export default Form;
