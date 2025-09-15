import React, { useRef, useEffect, useState } from 'react';

const ScrollingText = ({ 
  text = "Welcome to OpenHello ", 
  speed = 30,
  backgroundColor = "#5c0099",
  textColor = "#ffffff",
  height = 40,
  
  direction = "",
  width
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    // Measure text width after render
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth / 10);
    }
  }, [text]);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    
    if (!container || !textElement || textWidth === 0) return;

    let animationId;
    let position = direction === "left" ? 0 : -textWidth;

    const animate = () => {
      if (direction === "left") {
        // Right to left movement
        position -= speed / 60;
        if (position <= -textWidth) {
          position = 0; // Reset to start position
        }
      } else {
        // Left to right movement
        position += speed / 60;
        if (position >= 0) {
          position = -textWidth; // Reset to start position
        }
      }
      
      textElement.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, direction, textWidth]);

  const containerStyle = {
    width: width,
    height: `${height}px`,
    backgroundColor,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  const textStyle = {
    color: textColor,
    fontSize: '20px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    position: 'absolute'
  };

  // Create seamless loop by duplicating text with separator
  const seamlessText = `${text} • ${text}`;

  return (
    <div ref={containerRef} style={containerStyle}>
      <div ref={textRef} style={textStyle}>
        {seamlessText}
      </div>
    </div>
  );
};

export default ScrollingText;
