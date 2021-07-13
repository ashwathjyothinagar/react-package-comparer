import { SFC, ComponentClass } from 'react';
import { Dispatch, AnyAction } from 'redux';
export interface DispatchProps {
    onCapturePage: () => void;
}
export interface OwnProps {
    captureName: string;
    captureElementId: string;
    provideFeedbackUrl: string;
    reportIssueUrl: string;
    helpUrl: string;
    displayProvideFeedbackUrl: boolean;
    displayReportIssueUrl: boolean;
    displayHelpUrl: boolean;
    displayOnCapturePage: boolean;
}
export declare type Props = DispatchProps & OwnProps;
export declare const FeedbackComponent: SFC<Props>;
export declare const mapDispatchToProps: (_: Dispatch<AnyAction>, __: OwnProps) => DispatchProps;
export declare const Feedback: ComponentClass<OwnProps>;
