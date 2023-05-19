import { Button, Dialog, DialogBody, DialogFooter, } from "@material-tailwind/react";
import { Fragment, useState } from "react";

interface MyComponentProps {
    nameButton: string;
    className?: string;
    messageText: string;
    disabled?: boolean;
    messageConfirm: string;
    setConfirmation: () => void;
    isEditAdd: boolean;
}

const DialogComponent = (props: MyComponentProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    const { nameButton, setConfirmation } = props;

    const handleConfirmation = () => {
        handleOpen();
        setConfirmation();
    }

    return (
        <Fragment>
            <button onClick={handleOpen} className={props.className} disabled={props.disabled}>
                {nameButton} {props.isEditAdd ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>) : ''}

            </button>
            <Dialog open={open} handler={handleOpen} size="xs" className="rounded-none ">
                <DialogBody className="flex items-center justify-center pt-14 text-base text-black font-bold w-2/3 text-center mx-auto">
                    {props.messageText}
                </DialogBody>
                <DialogFooter className="flex items-center justify-center pb-10">
                    <Button
                        variant="text"
                        color="gray"
                        onClick={handleOpen}
                        className="mr-4 rounded-none bg-gray-400"
                    >
                        <span className="text-black capitalize">não</span>
                    </Button>
                    <Button className="shadow-md rounded-none font-light text-white" variant="gradient" color="green" onClick={handleConfirmation}>
                        <span className="normal-case">
                            {props.messageConfirm}
                        </span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}

export default DialogComponent;