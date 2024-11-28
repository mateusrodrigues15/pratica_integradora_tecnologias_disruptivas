import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DivFromImage, Image, LinkToDes } from './Styles';

const imageSrc = 'https://yt3.googleusercontent.com/5TjlI6nK7bU8ZORSy8q7ODI0pcdcvN7Vn7-lqnhO-AlscJgTL0GGyVtNdvFCvMIv5wKfeMdRyQ=s900-c-k-c0x00ffffff-no-rj',
LinkDescomplica = 'https://descomplica.com.br/faculdade/?utm_source=google&utm_medium=cpc&utm_campaign=psq-institucional-faculdade-ongoing&utm_term=descomplica%20faculdade&utm_content=institucional&gad_source=1&gclid=EAIaIQobChMI66K_4caDhAMV2l5IAB1dcQrvEAAYASAAEgLo0fD_BwE';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Faculdade Descomplica
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <DivFromImage>
            <Image src={imageSrc}/>
            </DivFromImage>
          </Typography>
            <LinkToDes ><a href={LinkDescomplica} target='blank'>Link para o site da Descomplica</a></LinkToDes>
        </Box>
      </Modal>
    </div>
  );
}