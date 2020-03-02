const hideModal = () => {
   const modalBackdrop = document.querySelector('.modal__backdrop');
   const productModal = document.querySelector('.modal__product-modal');

   modalBackdrop.classList.remove('modal__transparentBackground');
   productModal.classList.remove('modal__showModal');
   document.body.style.overflowY = 'auto';
}

export default hideModal;