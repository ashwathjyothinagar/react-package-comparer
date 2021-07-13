import { SFC } from 'react';
export interface NavigationStepProps {
    label: string;
    link: string;
    type: 'active' | 'past' | 'future';
}
export declare const NavigationStep: SFC<NavigationStepProps>;
