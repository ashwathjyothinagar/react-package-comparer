import React, { SFC, HtmlHTMLAttributes } from 'react';
import { Types } from './LoadingSpinner';
export interface AsyncProps extends HtmlHTMLAttributes<HTMLDivElement> {
    isLoading: boolean;
    spinnerContext?: Types.Context;
    children: React.ReactNode;
}
export declare const Async: SFC<AsyncProps>;
