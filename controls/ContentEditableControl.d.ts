import { Component } from 'react';
interface ContentEditableControlProps {
    elementType: string;
    name: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onLeave?: (value: string) => void;
    innerRef?: (el: HTMLElement) => HTMLElement;
}
declare class ContentEditableControl extends Component<ContentEditableControlProps> {
    constructor(props: ContentEditableControlProps);
    render(): JSX.Element;
    private handleChange;
    private handleOnBlur;
}
export { ContentEditableControl, ContentEditableControlProps };
