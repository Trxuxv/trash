import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Slide, SlideProps } from '@mui/material';
import * as React from 'react';

type TransitionProps = Omit<SlideProps, 'direction'>;

interface Props {
    message: string;
    sucess: boolean;
    show: boolean;
}

export interface State extends SnackbarOrigin {
    open: boolean;
}

const SnackbarComponent = (props: Props) => {
    const [state, setState] = React.useState<State>({
        open: true,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    function TransitionDown(props: TransitionProps) {
        return <Slide {...props} direction="down" />;
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false });
    };

    return (
        <div>
            {props.show && (

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    autoHideDuration={5000}
                    TransitionComponent={TransitionDown}
                    key={vertical + horizontal}
                >
                    <div className={props.sucess ?
                        "border border-green-400 text-sm bg-green-600  text-white  rounded h-10 flex items-center justify-center  px-6"
                        :
                        "text-sm border border-red-200"
                    }>
                        {props.message}
                    </div>
                </Snackbar>
            )}
        </div>
    );
}
export default SnackbarComponent;