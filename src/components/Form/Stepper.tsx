import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'
import { useParams } from 'react-router'

interface Props {
    stepNames: any;
}

export const Steps: React.FC<Props> = ({ stepNames }) => {
    const params = useParams();
    const currentStep = Number(params);

    return (
        <Stepper activeStep={currentStep}>
            <Step>
                <StepLabel>
                    Home
                </StepLabel>
            </Step>
            {stepNames.map((name: any, index: number) => (
                <Step key={index}>
                    <StepLabel>
                        {name.name}
                    </StepLabel>
                </Step>
            ))}
            <Step>
                <StepLabel>
                    Review
                </StepLabel>
            </Step>
        </Stepper>
    )
}