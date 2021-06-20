import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'

interface Props {
    stepNames: any;
}

export const Steps: React.FC<Props> = ({ stepNames }) => {

    return (
        <Stepper>
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