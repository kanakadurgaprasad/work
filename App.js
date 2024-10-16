import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import NetworkTree from "./NetworkTree";

const App = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant='contained' color='primary' onClick={handleOpen}>
                Open Modal
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    height='100vh'
                >
                    <Box
                        width='80vw'
                        height='70vh'
                        bgcolor='background.paper'
                        border='2px solid #000'
                        boxShadow={24}
                    >
                        <Box display='flex'>
                            <Box sx={{ width: "50%" }}>
                                <NetworkTree />
                            </Box>
                            <Box sx={{ width: "50%" }}>
                                <NetworkTree />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default App;
