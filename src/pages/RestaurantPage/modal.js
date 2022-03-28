/* import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useFormHook from '../../hooks/useFormHook';
import GlobalContext from '../../Global/GlobalContext';
import { goBack } from '../../routes/coordinators';
import { useNavigate } from 'react-router-dom';
import ToastAnimated from '../../constants/ui-lib';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

export default function ModalCard({info}) {
  const [form, onChangeInput] = useFormHook({products: [{id: info, quantity: 0}], paymentMethod: ''});
  const { postDishes } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [ open, setOpen ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  const postForm = (evt) => {
    evt.preventDefault();
    postDishes(form);
    setOpen(false);
  }

	return (
		<div>
			<button onClick={() => handleOpen()}>Adicionar</button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
					<Box sx={style}>
						<div id="transition-modal-description" sx={{ mt: 2 }}>
              <h1>Olá mundo</h1>
              <form onSubmit={postForm}>
                <input type='number' variant={"outlined"} name={"quantity"} value={form.products.quantity} onChange={onChangeInput}/>
                <button type='submit'>Adicionar ao carrinho</button>
              </form>
						</div>
					</Box>
			</Modal>
		</div>
	);
} */