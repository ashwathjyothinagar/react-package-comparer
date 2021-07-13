import { SFC } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
export interface ErrorMessageProps {
    touched: boolean | FormikTouched<any> | undefined;
    error: string | FormikErrors<any> | undefined;
}
export declare const ErrorMessage: SFC<ErrorMessageProps>;
