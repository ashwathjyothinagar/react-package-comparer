import { WrappedFieldProps } from 'redux-form';
import { FieldProps } from 'formik';
import * as yup from 'yup';
export { ListBuilderFieldProps } from './shared';
export declare const listBuilderSchema: (schema: yup.Schema<any>, label: string) => yup.ArraySchema<string>;
export declare const getInvalidItemsErrorMessage: (props: FieldProps<any> | WrappedFieldProps) => any;
export declare const getInvalidItems: (props: FieldProps<any> | WrappedFieldProps) => any;
export declare const ListBuilderField: import("react").ComponentClass<any, any>;
