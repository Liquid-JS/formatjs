export const noMatch = `_()`;
export const emptyFnCall = `
import {_} from '@f-fjs/macro'
_()`;
export const spreadJsx = `
import {FormattedMessage} from 'react-intl'
function foo (props) {
    return (
        <FormattedMessage {...props} />
    )
}
`;
export const dynamicMessage = `
import {_} from '@f-fjs/macro'
_({
    id,
    defaultMessage,
    description
})`;
