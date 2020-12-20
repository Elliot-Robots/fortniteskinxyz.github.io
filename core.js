let selectedSkinsAmount = 0;
let selectedSkinsNames = [];
let user_count = 0;

const Items = [
    'cid-1',
    'cid-2',
    'cid-3',
    'cid-4',
    'cid-5',
    'cid-6',
    'cid-7',
    'cid-8',
    'cid-9',
    'cid-10',
    'cid-11',
    'cid-12',
    'cid-13',
    'cid-14',
    'cid-15',
    'cid-16',
    'cid-17'
]

for (let i = 0; i < Items.length; i++) {
    document.querySelector('.items').innerHTML += `
        <div class="col-md-3 col-md-6 tk">
            <a class="card splash-card">
                <picture>
                    <img class="card-img-top desktop-img pickaxe" src="imgs/${Items[i]}.png">
                </picture>
            </a>
        </div>
    `
}

document.querySelectorAll('.col-md-3.col-md-6 a').forEach(item => {
    item.onclick = () => {
        if (!item.classList.contains('activeCard')) {
            if (selectedSkinsAmount >= 3) {
                $('.errorMsg').fadeIn();
                document.querySelector('.formError').innerText = 'Maximum 3 Skins!';
            } else {
                item.classList.add('activeCard');
                selectedSkinsAmount++;
                selectedSkinsNames.push(item.innerText);
            }
        } else {
            item.classList.remove('activeCard');
            selectedSkinsAmount--
            selectedSkinsNames = selectedSkinsNames.filter(e => e !== item.innerText);
        }
    }
});

function claim() {
    if (selectedSkinsAmount < 1) return document.querySelector('.holderInput h1').innerText = "Please select at least 1 or more skins!";

    $('.firstStep').fadeOut(250)
    $('.verifying').fadeIn(2250)

    const statuses = ['Connecting...', 'Authorizing User...', 'Enter Epic Name'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 1 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) {
                $('.fortnite-form').show();
                $('.userbutton').show();
            }
        }, time)
    }
}

function resume() {
    $('.verifying').fadeIn(2250)
    $('.fortnite-form').hide();
    $('.userbutton').hide();

    const statuses = ['User Found!', 'Verifying Human...', 'Attempting Human Verification (1/2)...', 'Failed...', 'Attempting Human Verification (2/2)...', 'Manual Verification Is Required To Claim Your Fortnite Skins!'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length - 1) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 0 ? "class='successText'" : i === statuses.length - 1 || i === 3 ? "class='errorText'}" : i === 4 || i === 2 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) $('.verify').show();
        }, time)
    }
}

var timerStarted = 0;
var $ = window.jQuery;

function startTimer(duration, display) {

    if (timerStarted == 0) {

        timerStarted = 1;

        var timer = duration,
            minutes, seconds;

        setInterval(function() {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
              var x = document.getElementsByClassName("timeLeft");
              x[0].innerHTML = "GOING SOON!";
            }

        }, 1000);
    }
}

startTimer(60 * 4.7, $('.timeLeft'));