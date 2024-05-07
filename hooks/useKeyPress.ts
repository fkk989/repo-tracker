import { useEffect } from "react";

export const useKeyPress = (eventFnc: any, key?: string) => {
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      const pressedKey = e.key;
      if (key && key === pressedKey) {
        eventFnc();
        return;
      }
      if (!key) {
        eventFnc();
      }
    });
  }, []);
};
