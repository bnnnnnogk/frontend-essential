const frontendInput = document.getElementById("frontend");

const frontendButton = document.getElementById("add-front");

const frontendMilestonesList = document.getElementById("frontend-milestone");

frontendButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newList = document.createElement("li");

  newList.textContent = frontendInput.value;

  frontendMilestonesList.appendChild(newList);
});

const inputBox = document.getElementById("input-box");
const backendMilestoneList = document.getElementById("backend-milestone");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    backendMilestoneList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

backendMilestoneList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", backendMilestoneList.innerHTML);
}

function showTask() {
  backendMilestoneList.innerHTML = localStorage.getItem("data");
}

showTask();
