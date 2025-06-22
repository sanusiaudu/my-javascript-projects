import React, { useState } from 'react';

function OTPGenerator() {
  const [otp, setOtp] = useState('');

  function generateOTP() { 
  
    setTimeout(() => {
      let digits = '0123456789'; 
      let OTP = ''; 
      let len = digits.length 
      for (let i = 0; i < 6; i++) { 
          OTP += digits[Math.floor(Math.random() * len)]; 
      } 
      setOtp(OTP); 
      
    }, 1000)
     
  } 

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='h-1/2 w-1/2 bg-gray-800 rounded-2xl text-white flex flex-col items-center justify-evenly p-3'>
        <h1 className='text-3xl font-bold'>OTP Generator</h1>
        <button className='bg-blue-800 px-6 py-3 rounded text-2xl' onClick={generateOTP} >Generate OTP</button>
        <div className='bg-gray-500 w-1/3 h-12 py-1 px-2 rounded flex justify-center items-center'>{otp} </div>
         </div>
    </div>
  );
}

export default OTPGenerator;
