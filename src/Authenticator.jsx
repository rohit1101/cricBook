import { Redirect } from '@reach/router'
import React from 'react'
import { LOGIN_PAGE } from './constants'
import UserContext from './Context'


class Authenticator extends React.Component {
    static contextType = UserContext

    render() {
        if (!this.context) {
            return <Redirect to={LOGIN_PAGE} noThrow />
        }

        return this.props.children
    }
}

export default Authenticator