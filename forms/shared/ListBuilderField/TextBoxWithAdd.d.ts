import { Component } from 'react';
export interface TextBoxWithAddProps {
    onAdd: (value: string) => void;
}
export interface TextBoxWithAddState {
    textValue: string;
}
export declare class TextBoxWithAdd extends Component<TextBoxWithAddProps, TextBoxWithAddState> {
    constructor(props: TextBoxWithAddProps);
    render(): JSX.Element;
    private handleAdd;
    private handleTextValueChange;
    private handleKeyPress;
}
