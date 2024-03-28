// JavaScript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

// JavaScript
const checkbox = document.getElementById("myCheckbox");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    alert("Checkbox is checked");
  } else {
    alert("Checkbox is unchecked");
  }
});
