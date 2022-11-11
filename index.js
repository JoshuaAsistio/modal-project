//get the buttons and modal
const openButton = $('.open-modal');
const closeButton = $('.close-modal');
const modal = $('.modal');

//add event listeners
openButton.click(() => {
  modal.css('display', 'flex');
});

closeButton.click(() => {
  modal.css('display', 'none');
})

modal.click(() => {
  modal.css('display', 'none');
})
