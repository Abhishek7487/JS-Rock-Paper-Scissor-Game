// Elements
const userScoreEl = document.querySelector(".userscore");
const compScoreEl = document.querySelector(".compscore");
const userStatEl = document.querySelector("#result-user-stat");
const compStatEl = document.querySelector("#result-comp-stat");
const finalStatEL = document.querySelector("#result-final-stat");

// Role Images
const rockImg = document.querySelector("[alt='rock']");
const paperImg = document.querySelector("[alt='paper']");
const scissorImg = document.querySelector("[alt='scissors']");

const rolesArr = [rockImg, paperImg, scissorImg];
rolesArr.forEach((role) => {
  role.addEventListener("click", () => {
    let userRole = role;
    let compRole = getRandomCompRole();

    let userRoleClone = userRole.cloneNode("true");
    let compRoleClone = compRole.cloneNode("true");
    userRoleClone.classList.add("resultImg");
    compRoleClone.classList.add("resultImg");

    let spanUserRole = document.createElement("span");
    spanUserRole.appendChild(userRoleClone);
    userStatEl.appendChild(spanUserRole);
    let spanCompRole = document.createElement("span");
    spanCompRole.appendChild(compRoleClone);
    compStatEl.appendChild(spanCompRole);
  });
});

function getRandomCompRole() {
  const roleImgsArr = [rockImg, paperImg, scissorImg];
  return roleImgsArr[Math.floor(Math.random() * roleImgsArr.length)];
}
