import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface Props {
    message: string;
    name: string;
    dispatchName: string
}

export const Form: React.FC<Props> = ({ message, name, dispatchName }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params: number = useParams();
    const next = params + 1;

    const [state, setState] = useState(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({
            type: dispatchName,
            payload: state
        })
        history.push(`/${next}`)
    }

    return (
        <div>
            <h2>{message}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder={name}
                    value={state}
                />
            </form>
        </div>
    );
}