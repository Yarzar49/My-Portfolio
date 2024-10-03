import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './Test.module.css'
import { ThemeContext } from './App';

const Test = () => {  
  const theme = useContext(ThemeContext);
  return (
    <>
    <div>{theme}</div>
    </>   
  );
}
export default Test;
