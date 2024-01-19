import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; //npm install react-spring

const NumberAnimation = ({ endValue, symbol = '' }) => {
  const [number, setNumber] = useState(0);

  const props = useSpring({
    number,
    from: { number: 0 },
    to: { number: endValue },
    config: { duration: 2000, easing: (t) => t * (2 - t) }, // Easing function example
    onFrame: ({ number }) => {
      setNumber(Math.floor(number));
    },
  });

  useEffect(() => {
    setNumber(0);
  }, [endValue]);

  return (
    <animated.p>
      {props.number.interpolate((val) => Math.floor(val))}
    </animated.p>
  );
};

export default NumberAnimation;