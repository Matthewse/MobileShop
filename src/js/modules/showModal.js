const showModal = () => {
   const modalBackdrop = document.querySelector('.modal__backdrop');
   const productModal = document.querySelector('.modal__product-modal');
   
   modalBackdrop.classList.add('modal__transparentBackground');
   productModal.classList.add('modal__showModal');
   document.body.style.overflow = 'hidden';
}

export default showModal;