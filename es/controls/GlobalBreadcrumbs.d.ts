import { SFC } from 'react';
export interface GlobalBreadcrumbsProps {
    links: Array<{
        url: string;
        text: string;
    }>;
}
export declare const GlobalBreadcrumbs: SFC<GlobalBreadcrumbsProps>;
