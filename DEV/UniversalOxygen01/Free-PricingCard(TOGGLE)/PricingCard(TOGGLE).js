const toggleButton = document.querySelector(".toggle-button");
const card = document.querySelector(".container12");
const modes = ["_", "darkish", "red", "yellow"];
let modeIndex = 0;

function runModeChange() {
  modeIndex = modeIndex % modes.length;

  // Remove all theme related classes
  modes.forEach((m) => {
    card.classList.remove(m);
  });

  // let newClassValue = "";

  // card.classList.forEach((c) => {
  //   if (modes.some((el) => el == c)) return;
  //   newClassValue += ` ${c}`;
  // });
  // card.classList.value = newClassValue;

  // get current theme to add
  const currentMode = modes[modeIndex];
  card.classList.add(currentMode);

  modeIndex++;
}

toggleButton.addEventListener("click", () => {
  runModeChange();
});

runModeChange();








console.log(1)