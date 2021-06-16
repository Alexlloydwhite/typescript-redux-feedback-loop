import { useHistory } from 'react-router-dom';

export const Home: React.FC = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => history.push('/1')}>Begin Feedback</button>
        </div>
    )
}