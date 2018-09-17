import $ from 'jquery';

class Modal{
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(){
    //clicking the open modal openModalButton
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the x close mdoal openModalButton
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any keyup

    $(document).keyup(this.keyPressHandler.bind(this));

  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }

  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;

  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
    $(".video-embed").children('iframe').attr('src', '');

  }

}

export default Modal;
