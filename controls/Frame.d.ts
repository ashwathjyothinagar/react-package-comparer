import { Component } from 'react';
export interface FrameProps {
    messageListeners?: Array<(this: Window, ev: MessageEvent) => any>;
    url: string;
}
export declare class Frame extends Component<FrameProps> {
    private messageListeners;
    private iframeRef;
    constructor(props: FrameProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    postMessage(message: any, origin: string): void;
    render(): JSX.Element;
}
