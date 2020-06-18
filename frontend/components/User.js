import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTyles from 'prop-types';

const CURRENT_USER_QUERY = gql`
    me {
        id
        email
        name
        permissions
    }
`;

const User = props => (
    <Query {...props} query={CURRENT_USER_QUERY}>
        {payload => props.children(payload)}
    </Query>
);

export default User;
export { CURRENT_USER_QUERY };