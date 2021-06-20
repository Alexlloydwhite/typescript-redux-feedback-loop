import {
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'
import { useState } from 'react'


interface Props {
    arrayOfPages: any;
}

export const Steps: React.FC<Props> = ({ arrayOfPages }) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Stepper activeStep={activeStep}>
            <Step>
                <StepLabel>
                    Home
                </StepLabel>
            </Step>
            {arrayOfPages.map((page: any, index: number) => (
                <Step key={index}>
                    <StepLabel>
                        {page.name}
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