import React from 'react';
import { WizardContext } from 'react-albus';
import { History } from 'history';
import { FormikSharedConfig, FormikErrors, FormikActions } from 'formik';
export declare interface FormikWizardProps<T> extends FormikSharedConfig {
    basePath: string;
    history: History;
    initialValues: T;
    isEditMode?: boolean;
    onCancel: () => void;
    onSubmit: (values: T, bag: FormikActions<T>) => void;
    validate?: ((values: T) => void | object | Promise<FormikErrors<T>>);
    validationSchema?: any | (() => any);
}
export declare type FormikWizardStep = React.ComponentType<{
    validationKey?: string;
    id: string;
    render: () => React.ReactNode;
}>;
export interface FormikWizardState {
    values: any;
    isSubmitting: boolean;
}
export declare class FormikWizard<T extends {}> extends React.Component<FormikWizardProps<T>, FormikWizardState> {
    static Step: FormikWizardStep;
    constructor(props: FormikWizardProps<T>);
    render(): JSX.Element;
    validate: (wc: WizardContext) => (values: T) => void | object;
    private handleSubmit;
    private validateSchema;
    private getCombinedSchema;
    private getStepSchema;
    private getAllSteps;
    private getCurrentStep;
    private getUrl;
    private isFirstPage;
    private isLastPage;
    private back;
    private next;
}
