import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'

interface Props {
    stepNames: any;
}

export const Steps: React.FC<Props> = ({stepNames}) => {
    return (
        <Stepper>
            {stepNames.map((name: any, index: number) => (
                <Step key={index}>
                    <StepLabel>
                        {name.name}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}