export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export const showModal = content => ({
    type: MODAL_SHOW,
    content
});

export const hideModal = () => ({
    type: MODAL_HIDE
});
