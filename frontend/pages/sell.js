import CreateItem from '../components/CreateItem';
import RequestSignIn from '../components/RequestSignIn';

const Sell = props => (
    <div>
        <RequestSignIn>
            <CreateItem />
        </RequestSignIn>
    </div>
);

export default Sell;
