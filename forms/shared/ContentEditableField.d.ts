import { SFC } from 'react';
import { ComponentsFieldProps } from '..';
interface ContentEditableFieldProps extends ComponentsFieldProps<(value: string) => void> {
    elementType: string;
    disabled?: boolean;
}
declare const ContentEditableField: SFC<ContentEditableFieldProps>;
export { ContentEditableField, ContentEditableFieldProps };
