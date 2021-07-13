import { Component } from 'react';
import { ColorResult, HSLColor } from 'react-color';
import { ComponentsFieldProps } from '../';
export interface ColorPickerFieldProps extends ComponentsFieldProps {
    onChange: (value: ColorResult) => void;
}
export interface ColorPickerFieldState {
    isOpen: boolean;
}
export declare const toHslValue: (value: number) => string;
export declare const toHslaString: (color?: HSLColor | undefined) => string | undefined;
export declare class ColorPickerField extends Component<ColorPickerFieldProps, ColorPickerFieldState> {
    constructor(props: ColorPickerFieldProps);
    render(): JSX.Element;
    handleButtonClick: () => void;
    closePicker: () => void;
}
