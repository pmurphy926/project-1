$(() => {

const dropdown = () => {

}

$('#burger').on('click', dropdown).hide();


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