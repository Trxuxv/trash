import { Button, Dialog, DialogBody, DialogFooter, } from "@material-tailwind/react";
import { Fragment, useState } from "react";

interface MyComponentProps {
    nameButton: string;
    className?: string;
    messageText: string;
    setConfirmation: () => void;
}

const DialogComponent = (props: MyComponentProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const { nameButton, setConfirmation } = props;

    const handleConfirmation = () => {
        handleOpen();
        setConfirmation();
    } 
    
    return (
        <Fragment>
            <button onClick={handleOpen} className={props.className}>
                {nameButton}
            </button>
            <Dialog open={open} handler={handleOpen} className="w-96 rounded-none">
                <DialogBody className="flex items-center justify-center pt-10 text-black font-bold">
                    {props.messageText}
                </DialogBody>
                <DialogFooter className="flex items-center justify-center">
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-4 rounded-none"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button className="shadow-md rounded-none font-light text-white" variant="gradient" color="green" onClick={handleConfirmation}>
                        <span>Confirmar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}

export default DialogComponent;