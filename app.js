$(() => {

//Nav Dropdown - I wanted the dropdown to close when clicked outside but could not figure it out so I went with a button. Used the modal exercise as the basis.
const $openDropdownBtn = $('#openDropdown')
const $dropdown = $('#other-links');
const $closeDropdownBtn = $('#closeDropdown')


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
// $modal.css('display', 'none');

const openModal = () => {
    $modal.css('display', 'block');
}

const closeModal = () => {
    $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);


//Enlarge screenshots on click - couldn't figure this out
// $terminalScreenshot = $('#terminal-screenshot');

// const enlargeImg = () => {
//     $terminalScreenshot.on('click').addClass('embiggen');
//     if ($terminalScreenshot instanceof embiggen){
//     $terminalScreenshot.css('transform', 'scale(2.5)');
//     terminalScreenshot.css('transition', 'transform 0.25s ease');
//     $terminalScreenshot.css('justify-content', 'center');
//     }
// }

// enlargeImg

// const resetImg = () => {
//     $terminalScreenshot.removeClass('embiggen');
//     terminalScreenshot.css('transform', 'scale(1)');
//     $terminalScreenshot.css('transition', 'transform 0.25s ease');
//     }

// $terminalScreenshot.on('click', enlargeImg)
// $('.embiggen').on('click', resetImg)

//Hover to enlarge screenshots on Projects page. Animations aren't smooth.
$terminalScreenshot = $('#terminal-screenshot');

$terminalScreenshot.on({
    mouseenter: enlargeImg = () => {
        $terminalScreenshot.css('transform', 'scale(2.5)');
        $terminalScreenshot.css('transition', 'transform 0.25s ease');
        $terminalScreenshot.css('margin', 'o auto');
        // $terminalScreenshot.css('margin-left', '70%');
        // $terminalScreenshot.css('align-self', 'flex-end');
    },
    mouseleave: resetImg = () => {
        $terminalScreenshot.css('transform', 'scale(1)');
        $terminalScreenshot.css('transition', 'transform 0.25s ease');
        // $terminalScreenshot.css('margin-left', '2.5%');
        // $terminalScreenshot.css('z-axis', '0');
    }
});

$blackjackScreenshot = $('#blackjack-screenshot');

$blackjackScreenshot.on({
    mouseenter: enlargeImg = () => {
        $blackjackScreenshot.css('transform', 'scale(2.5)');
        $blackjackScreenshot.css('transition', 'transform 0.25s ease');
        $blackjackScreenshot.css('margin-left', '70%');
    },
    mouseleave: resetImg = () => {
        $blackjackScreenshot.css('transform', 'scale(1)');
        $blackjackScreenshot.css('transition', 'transform 0.25s ease');
        $blackjackScreenshot.css('margin-left', '2.5%');
        $blackjackScreenshot.css('z-axis', '0');
    }
});

//Tried to made it drier but it behaved differently when I kept it on one line.

// $blackjackScreenshot.on({
//     mouseenter: enlargeImg = () => {
//         $blackjackScreenshot.css('transform', 'scale(2.5)','transition', 'transform 0.25s ease', 'margin-left', '70%');
//     },
//     mouseleave: resetImg = () => {
//         $blackjackScreenshot.css('transform', 'scale(1)', 'transition', 'transform 0.25s ease', 'margin-left', '5%', 'z-axis', '0');
//     }
// });

})