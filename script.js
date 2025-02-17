const messages = [
    "Em chắc chứ?",
    "Thật sự chắc chắn??",
    "Đồng ý đi mò?",
    "Cục cưng làm ơn ...",
    "Hãy suy nghĩ về điều đó!",
    "Nếu em ko đồng ý nữa là anh buồn đó ..",
    "Buồn ghê",
    "Buồn ơi là buồn",
    "Ok anh ổn",
    "Em đùa thoi đúng hong nói có đi ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}