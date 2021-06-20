import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Slider } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

interface Props {
    message: string;
    name: string;
    dispatchName: string;
    pageIndex: number;
    arrayOfPages: any;
}

export const Form: React.FC<Props> = ({ message, name, dispatchName, pageIndex, arrayOfPages }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: dispatchName,
            payload: state
        });

        if (pageIndex === arrayOfPages.length - 1) {
            history.push('/review')
        } else {
            const newIdx: number = pageIndex + 1;
            history.push(String(newIdx));
        }
    }


    return (
        <div>
            <h2>{message}</h2>
            <form onSubmit={handleSubmit}>
                {pageIndex !== arrayOfPages.length - 1 ?
                    <div style={{ maxWidth: 300, textAlign: 'center' }}>
                        <SentimentVeryDissatisfiedIcon color="primary" />
                        <Slider
                            min={1}
                            max={10}
                            marks
                            valueLabelDisplay='auto'
                            onChange={(e: any) => setState(e.target.value)}
                        />
                        <InsertEmoticonIcon color="primary" />
                    </div>
                    :
                    <input />
                }

                <button type="submit">Next</button>
            </form>
        </div>
    );
}

// <input
// required
// placeholder={name}
// value={state}
// onChange={(e: any) => setState(e.target.value)}
// style={{ marginRight: 10 }}
// />