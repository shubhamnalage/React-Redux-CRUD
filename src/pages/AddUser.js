import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action/action";

const AddUser = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");
  const { name, email, contact, address } = userDetails;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all fields");
    } else {
      dispatch(addUser(userDetails));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
        <h2>Add User</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          name="contact"
          value={contact}
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          name="address"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onChange={handleInputChange}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
