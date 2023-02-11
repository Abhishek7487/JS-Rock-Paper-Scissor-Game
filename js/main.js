// Elements
const userScoreValEl = document.querySelector("#userScoreVal");
const compScoreValEl = document.querySelector("#compScoreVal");
const userStatEl = document.querySelector("#result-user-stat");
const compStatEl = document.querySelector("#result-comp-stat");
const finalStatEL = document.querySelector("#result-final-stat");
// Setting Initial Scores to 0
userScoreValEl.textContent = 0;
compScoreValEl.textContent = 0;

// Role Elements
const rockRoleEl = document.querySelector("#r");
const paperRoleEl = document.querySelector("#p");
const scissorRoleEl = document.querySelector("#s");

// Creating spam tag for each Result and appending it.
const spanUserRole = document.createElement("span");
spanUserRole.textContent = "";
userStatEl.appendChild(spanUserRole);

const spanCompRole = document.createElement("span");
spanCompRole.textContent = "";
compStatEl.appendChild(spanCompRole);

const spanWinner = document.createElement("span");
spanWinner.textContent = "";
finalStatEL.appendChild(spanWinner);

// USER selects his role and the random role for COMP is generated
const rolesArr = [rockRoleEl, paperRoleEl, scissorRoleEl];
rolesArr.forEach((role) => {
  role.addEventListener("click", () => {
    const userRole = role;
    // Displaying srlected role infront of USER stat
    if (userRole === rockRoleEl) {
      spanUserRole.textContent = "Rock";
    } else if (userRole == paperRoleEl) {
      spanUserRole.textContent = "Paper";
    } else if (userRole == scissorRoleEl) {
      spanUserRole.textContent = "Scissor";
    }

    // Displaying srlected role infront of COMP stat
    const compRole = getRandomCompRole();
    if (compRole === rockRoleEl) {
      spanCompRole.textContent = "Rock";
    } else if (compRole == paperRoleEl) {
      spanCompRole.textContent = "Paper";
    } else if (compRole == scissorRoleEl) {
      spanCompRole.textContent = "Scissor";
    }

    // Comparing Roles for finding WINNER or DRAW
    if (
      (userRole === rockRoleEl && compRole === scissorRoleEl) ||
      (userRole === paperRoleEl && compRole === rockRoleEl) ||
      (userRole === scissorRoleEl && compRole === paperRoleEl)
    ) {
      spanWinner.textContent = " User 👤";
      userScoreValEl.textContent++;
    } else if (
      (userRole === paperRoleEl && compRole === scissorRoleEl) ||
      (userRole === scissorRoleEl && compRole === rockRoleEl) ||
      (userRole === rockRoleEl && compRole === paperRoleEl)
    ) {
      spanWinner.textContent = " Computer 🖥️";
      compScoreValEl.textContent++;
    } else if (
      (userRole === rockRoleEl && compRole === rockRoleEl) ||
      (userRole === paperRoleEl && compRole === paperRoleEl) ||
      (userRole === scissorRoleEl && compRole === scissorRoleEl)
    ) {
      spanWinner.textContent = " DRAW 📍";
    }
  });
});

// Function for Generating random COMP role
function getRandomCompRole() {
  const roleImgsArr = [rockRoleEl, paperRoleEl, scissorRoleEl];
  return roleImgsArr[Math.floor(Math.random() * roleImgsArr.length)];
}
