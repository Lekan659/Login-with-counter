import React from 'react'
import styled from "styled-components";
// // import { LoginForm } from "./loginForm";
// import { motion } from "framer-motion";
import loginImg from '../../assets/login.png'
import Formbox from '../Formbox/Formbox';

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const BoxContainer = styled.div`
  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;


export default function Login() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

<div className=' flex flex-col justify-center'>
<form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8'>

        <BoxContainer>
        <TopContainer>
          <BackDrop/>
          <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>To continue, Login into Gradientfi</SmallText>
            </HeaderContainer>
          </TopContainer>

          <InnerContainer>
            <Formbox/>
          </InnerContainer>

          </BoxContainer>

        </form>

</div>

<div className='hidden sm:block'>
    <img className='w-full h-full object-cover' src={loginImg} alt="" />
</div>
</div> 
  )
}


{/* <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
<div className='hidden sm:block'>
    <img className='w-full h-full object-cover' src={loginImg} alt="" />
</div>
<div className='bg-gray-800 flex flex-col justify-center'>
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
        </div>
    </form>
</div>
</div> */}