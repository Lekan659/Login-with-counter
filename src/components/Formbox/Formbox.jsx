import React from 'react'
import styled from "styled-components";
// // import { LoginForm } from "./loginForm";
// import { motion } from "framer-motion";

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;



const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;




export default function Formbox() {
    return (

    <BoxContainer>
        <VerticalMargin margin={10}/>
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <VerticalMargin margin={10}/>
    {/* <Marginer direction="vertical" margin={10} /> */}
    <MutedLink href="#">Forget your password?</MutedLink>
    <VerticalMargin margin={'1.6em'}/>
    {/* <Marginer direction="vertical" margin="1.6em" /> */}
    
    <SubmitButton href="/counter">
    <a href="/counter" >
        Login
    </a>
    </SubmitButton>
    
    <VerticalMargin margin={'1em'}/>
    {/* <Marginer direction="vertical" margin="1em" /> */}
    <MutedLink href="#">
      Don't have an account?{" "}
      {/* <BoldLink href="#" onClick={switchToSignup}>
        Signup
      </BoldLink> */}
    </MutedLink>
  </BoxContainer>

    )
}