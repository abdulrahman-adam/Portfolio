// AnimationContext.js
import { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(0);

  const replayAnimation = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <AnimationContext.Provider value={{ trigger, replayAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationTrigger = () => useContext(AnimationContext);