import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface Props {
    message: string;
    name: string;
    dispatchName: string;
    next: number;
}

export const Form: React.FC<Props> = ({ message, name, dispatchName, next }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({
            type: dispatchName,
            payload: state
        });
        history.push(String(next));
    }

    return (
        <div>
            <h2>{message}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder={name}
                    value={state}
                    onChange={(e: any) => setState(e.target.value)}
                    style={{ marginRight: 10 }}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}