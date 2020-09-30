import React from 'react';
import { Size } from "../helpers/constants";
declare type ModalCloseProps = React.ComponentPropsWithoutRef<'button'> & {
    size?: Size;
};
declare const ModalClose: React.FC<ModalCloseProps>;
export default ModalClose;
export { ModalClose, ModalCloseProps };
