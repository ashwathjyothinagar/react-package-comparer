import { SFC } from 'react';
export declare namespace Types {
    type Context = 'relative' | 'page';
}
export interface LoadingSpinnerProps {
    context: Types.Context;
}
export declare const LoadingSpinner: SFC<LoadingSpinnerProps>;
