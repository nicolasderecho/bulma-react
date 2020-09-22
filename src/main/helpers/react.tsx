import React, {RefObject, useContext, useEffect, useRef, useState} from "react";

const OutsideClickContext = React.createContext({onOutsideClick: () => {}, isActive: false});
const { Provider: OutsideClickProvider, Consumer: OutsideClickConsumer } = OutsideClickContext;

export { OutsideClickProvider, OutsideClickConsumer, OutsideClickContext };

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useOutsideAlerter(closeOnClickOutside = true) {
  const [clickedOutside, setClickedOutside] = useState(false);
  const { onOutsideClick, isActive } = useContext(OutsideClickContext);
  const ref = useRef<HTMLElement>(null);

  if(closeOnClickOutside && clickedOutside && isActive) {
    setClickedOutside(false);
    window.setTimeout(onOutsideClick, 0);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (closeOnClickOutside && isActive && ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
      setClickedOutside(true);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return { ref, setClickedOutside, clickedOutside }
}

/**
 * Component that alerts if you click outside of it
 */
export type OutsideAlerterProps = React.ComponentPropsWithoutRef<'div'> & {
  closeOnClickOutside?: boolean;
}

export const OutsideAlerter: React.FC<OutsideAlerterProps> = (originalProps) => {
  const { closeOnClickOutside, ...props} = originalProps;
  const {ref: wrapperRef} = useOutsideAlerter(closeOnClickOutside);
  return <div ref={wrapperRef as RefObject<HTMLDivElement>}>{props.children}</div>;
}

OutsideAlerter.displayName = 'OutsideAlerter';