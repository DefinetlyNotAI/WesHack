const themeRevealDate = new Date("December 1, 2024 00:00:00").getTime();
const hackathonStartDate = new Date("December 13, 2024 00:00:00").getTime();
const hackathonEndDate = new Date("December 15, 2024 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = Date.now();
    let message;
    let extraMessage = "";

    if (now < themeRevealDate) {
        const timeLeft = themeRevealDate - now;
        message = `Theme reveal in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.`;
    } else if (now < hackathonStartDate) {
        const timeLeft = hackathonStartDate - now;
        message = `The theme is Astronomy! Start Practicing 🤗!`;
        extraMessage = `Competition in ${Math.floor(timeLeft / (1000 * 60 * 60 * 24))} days, ${Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} hours, ${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} minutes, and ${Math.floor((timeLeft % (1000 * 60)) / 1000)} seconds.<br><br>Very important, DO NOT finish the project! You won't be allowed to enter the competition if you do. You are allowed to finish the project up to 60% - This will be decided by the organisers.`;
    } else if (now <= hackathonEndDate) {
        message = "The Official Wesgreen Hackathon has begun!";
    } else {
        message = "The Official Wesgreen Hackathon has ended.";
    }

    document.getElementById("countdown").innerHTML = message + (extraMessage ? `<br>${extraMessage}` : "");

    if (now > hackathonEndDate) clearInterval(countdownTimer);
}, 1000);