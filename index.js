$('.imgPOPUP').magnificPopup({
    type: 'image',
        image: {
            titleSrc: 'title' 
            // this tells the script which attribute has your caption
        }
    // other options
  });



let button = document.querySelector('.BackToTop');
let options = {top: 0, left: 0, behavior: 'smooth'}; // left and top are coordinates
button.addEventListener('click', () => { window.scroll(options)});
