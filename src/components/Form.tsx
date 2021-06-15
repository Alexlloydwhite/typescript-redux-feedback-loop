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

    const [state, setState] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({
            type: dispatchName,
            payload: state
        })
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{message}</h2>
            <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
                <input
                    type="number"
                    placeholder={name}
                    value={state}
                    onChange={(e: any) => setState(e.target.value)}
                    style={{marginRight: 10}}
                />
                <button>
                    Next
                </button>
            </form>
        </div>
    );
}