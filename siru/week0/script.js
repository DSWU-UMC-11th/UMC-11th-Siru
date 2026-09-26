const cheerBtn = document.querySelector(".cheer");
const cheerDialog = document.querySelector(".cheer-dialog");
const closeBtn = document.querySelector(".close-btn");
const dialogText = document.querySelector(".cheer-dialog p");

const cheerMessages = [
  "오늘 하루도 힘내~~~ 💪",
  "지금도 충분히 잘하고 있어요! ✨",
  "매일 좋은 일만 가득하길 🍀",
  "지치지 말고 화이팅! 🔥",
];

cheerBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cheerMessages.length);

  dialogText.textContent = cheerMessages[randomIndex];

  cheerDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  cheerDialog.close();
});
