$(() => {

//Nav Dropdown - I wanted the dropdown to close when clicked outside but could not figure it out so I went with a button. Used the modal exercise as the basis.
const $openDropdownBtn = $('#openDropdown')
const $dropdown = $('#myDropdown');
const $closeDropdownBtn = $('#closeDropdown')
$dropdown.css('display', 'none');

const openDropdown = () => {
    $dropdown.css('display', 'block');
}
 
const closeDropdown = () => {
    $dropdown.css('display', 'none');
}

$openDropdownBtn.on('click', openDropdown);
$closeDropdownBtn.on('click', closeDropdown);


//Bio Image Carousel - I leaned heavily on the exercise material for this.
let numberOfImages = $('.carousel-images').children().length - 1;
let currentImageIndex = 0;

$('#right').on('click', () => {
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'none');
    if (currentImageIndex < numberOfImages) {
        currentImageIndex++
    } else {
        currentImageIndex = 0
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block');
})

$('#left').on('click', () => {
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'none');
    if (currentImageIndex > 0) {
        currentImageIndex--
    } else {
        currentImageIndex = numberOfImages
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block');

})

//Interests Modal - I used the code along from the exercise for this, just this time without all the bugs.
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#closeModal');
$modal.css('display', 'none');

const openModal = () => {
    $modal.css('display', 'block');
}

const closeModal = () => {
    $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);


})