import { SFC } from 'react';
export interface WizardButtonsProps {
    displayBackButton: boolean;
    displayNextButton: boolean;
    displaySaveButton: boolean;
    onBack: () => void;
    onCancel: () => void;
    onNext: () => void;
    onSubmit: () => void;
}
export declare const Buttons: SFC<WizardButtonsProps>;
