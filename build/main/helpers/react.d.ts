import React from "react";
declare const OutsideClickContext: React.Context<{
    onOutsideClick: () => void;
    isActive: boolean;
}>;
declare const OutsideClickProvider: React.Provider<{
    onOutsideClick: () => void;
    isActive: boolean;
}>, OutsideClickConsumer: React.Consumer<{
    onOutsideClick: () => void;
    isActive: boolean;
}>;
export { OutsideClickProvider, OutsideClickConsumer, OutsideClickContext };
export declare function usePrevious<T>(value: T): T | undefined;
export declare function useOutsideAlerter(closeOnClickOutside?: boolean): {
    ref: React.RefObject<HTMLElement>;
    setClickedOutside: React.Dispatch<React.SetStateAction<boolean>>;
    clickedOutside: boolean;
};
/**
 * Component that alerts if you click outside of it
 */
export declare type OutsideAlerterProps = React.ComponentPropsWithoutRef<'div'> & {
    closeOnClickOutside?: boolean;
};
export declare const OutsideAlerter: React.FC<OutsideAlerterProps>;
declare const addClipped: Function, removeClipped: Function;
export { addClipped, removeClipped };
