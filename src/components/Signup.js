import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";

//styles///

const StyledButton = styled("button")`
  width: 140px;
  height: 45px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 128, 128, 0.4);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 1rem;
  :hover {
    background-color: green;
    box-shadow: 0px 15px 20px rgba(0, 215, 0, 0.4);
    color: black;
    transform: translateY(-7px);
  }
`;

const StyledInputContainer = styled("div")`
  display: flex;
  padding: 1rem 0rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serid;
  font-size: 1.25rem;
  color: blue;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const StyleInput = styled("input")`
  flex: 1;
  width: 20rem;
  border-radius: 4px;
  font-size: 1.25rem;
  border: none;
  font-family: monospace;
  box-shadow: 0px 3px 5px rgba(0, 0, 255, 0.7);
  :hover {
    box-shadow: 0px 3px 5px rgba(0, 100, 0, 0.7);
  }
`;
//////

const Signup = () => {
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [result, setResult] = useState({});

  async function postFormFetch() {
    console.log(inputs);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    try {
      setLoading("true");
      const response = await fetch(`http://127.0.0.1:8080/signup`, settings);
      const json = await response.json();
      if (response.status !== 200) throw Error(json.message);
      return json;
    } catch (error) {
      alert(error);
      setLoading("null");
    }
  }

  // useEffect(() => {
  //   postFormFetch();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    postFormFetch();
  };

  const handleInputChange = (e) => {
    e.persist();
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <StyledInputContainer>
        <label style={{ flex: 1 }}>Name</label>
        <StyleInput
          type="text"
          name="name"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.name}
          required
        />
        <br />
      </StyledInputContainer>
      <StyledInputContainer>
        <label style={{ flex: 1 }}>Username</label>
        <StyleInput
          type="text"
          name="username"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.username}
          required
        />
        <br />
      </StyledInputContainer>
      <StyledInputContainer>
        <label style={{ flex: 1 }}>Email</label>
        <StyleInput
          type="email"
          name="email"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.email}
          required
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label style={{ flex: 1 }}>Password</label>
        <StyleInput
          type="password"
          name="password"
          // onChange={(e) => setInput(e.target.value)}
          onChange={(e) => handleInputChange(e)}
          value={input.password}
        />
      </StyledInputContainer>
      <ButtonContainer>
        <StyledButton type="submit">Sign Up</StyledButton>
      </ButtonContainer>
    </form>
  );
};

export default Signup;
