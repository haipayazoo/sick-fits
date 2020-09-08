import RequestSignIn from '../components/RequestSignIn';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
    <div>
        <RequestSignIn>
            <Permissions />
        </RequestSignIn>
    </div>
);

export default PermissionsPage;
