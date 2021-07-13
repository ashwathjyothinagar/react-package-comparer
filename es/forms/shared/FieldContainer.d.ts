import React, { SFC } from 'react';
import { FieldProps } from 'formik';
import { WrappedFieldProps } from 'redux-form';
import { ComponentsFieldProps, ContainerProps, FieldEventHandlers } from '../';
import { HelpTextProps } from './HelpText';
import { ErrorMessageProps } from './ErrorMessage';
export interface FieldContainerProps extends HelpTextProps, ErrorMessageProps, ComponentsFieldProps {
    elementType: 'div' | 'fieldset';
    showContainerLabel?: boolean;
}
export declare const FieldContainer: SFC<FieldContainerProps>;
export declare interface RequiredProps extends ContainerProps, FieldEventHandlers {
    [K: string]: any;
}
declare type PropsOverrideFunc = <T extends RequiredProps>(_: FormLibraryProps<T>) => Partial<RequiredProps>;
declare type FormLibraryProps<T> = T extends WrappedFieldProps ? T & WrappedFieldProps : T & FieldProps;
export declare const thirdPartyChangeHandler: <T extends {}, K extends keyof T>(props: FormLibraryProps<T>, key?: K | undefined) => (value: T) => void;
export declare const isReduxField: (props: {}) => props is WrappedFieldProps;
export declare const withFieldContainer: <OuterProps extends RequiredProps>(Component: React.ComponentType<OuterProps>, propsOverrides?: PropsOverrideFunc) => React.ComponentClass<any, any>;
export {};
