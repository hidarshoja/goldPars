"use client"
  import React, { useState, useEffect, useRef, useCallback } from "react";
  import "../ticker.css"
  
  const newsItems = [
    {id:1, key: "قیمت طلا امروز" , price :"2,300,000" },
    {id:2, key: "قیمت طلا فروش " , price :"2,300,000" },
    {id:3, key: "قیمت طلا خرید " , price :"2,320,000" },
    {id:4,  key: "قیمت سکه تمام " , price :"23,320,000" },
    {id:5,  key: "قیمت سکه طرح قدیم   " , price :"25,320,000" },
    {id:6,  key: "قیمت نیم  سکه " , price :"15,320,000" },
    {id:7,  key: "قیمت ربع  سکه " , price :"9,320,000" },
    {id:8,  key: "قیمت سکه طرح قدیم   " , price :"25,320,000" },
    {id:9,  key: "قیمت طلا  دیروز " , price :"15,320,000" },
    {id:10,  key: "قیمت طلا  جهانی " , price :"9,320,000" },
  ];
  
  const Element = (props) => {
    const { title } = props;
    return <div className="element" style={{color:"#004225"}}>{title}</div>;
  };
  
  const TickerComponent = () => {
    const [items, setItems] = useState(newsItems);
    const [animationRunning, setAnimationRunning] = useState(false);
    const wrapperRef = useRef();
    const indexRef = useRef();
  
    const handleRefUpdate = useCallback(
      (node) => {
        if (node !== null && items.length > 0) {
          indexRef.current = node.firstChild;
          wrapperRef.current = node;
          document.documentElement.style.setProperty(
            "--animationDistance",
            `${0 - indexRef.current.offsetWidth}px`
          );
          document.documentElement.style.setProperty(
            "--animationDuration",
            `${Math.round(indexRef.current.offsetWidth / 33)}s`
          );
          wrapperRef.current.classList.add("moving");
        }
      },
      [items]
    );
  
    const handleLoop = () => {
      wrapperRef.current.classList.remove("moving");
      wrapperRef.current.style.animation = "none";
      const t = wrapperRef.current.offsetHeight; 
      wrapperRef.current.style.animation = null;
      shiftNext([...items]);
    };
  
    const shiftNext = (copy) => {
      const firstitem = copy.shift();
      copy.splice(copy.length, 0, firstitem);
      setItems(copy);
    };
  
    const handleAnimationEnd = () => {
      handleLoop();
    };
  
    useEffect(() => {
      handleLoop();
    }, []);
  
    return (
      <div className="wrapper">
        <div
          className="inner"
          ref={handleRefUpdate}
          onAnimationEnd={handleAnimationEnd}
        >
          {items.map((obj, index) => (
            <Element  title={`${obj.key} : ${obj.price}`} key={obj.key + index}  />
          ))}
        </div>
      </div>
    );
  };
  
  export default function App() {
    return (
      <div className=" h-12 mt-[80px] flex items-center justify-center w-full bg-color4">
        <TickerComponent />
      </div>
    );
  }
  
  
  
  