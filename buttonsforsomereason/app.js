console.log("is despise javascript");

const button = document.getElementById("btn");

const container = document.getElementById("container");

function onClick() {
  console.log("clicked!!!");
  const newBtn = document.createElement("button");
  console.log();
  newBtn.id = "btn";
  newBtn.className = "btn";
  container.appendChild(newBtn);
  newBtn.innerHTML = "this doesnt work fr";
}

function onClick2() {
  const randR = Math.floor(Math.random() * 255) + 1;
  const randG = Math.floor(Math.random() * 255) + 1;
  const randB = Math.floor(Math.random() * 255) + 1;
  document.body.style = `background-color:rgb(${randR},${randG},${randB})`;
  setTimeout(function () {
    for (i = 1; i <= 10000; i++) {
        setTimeout(function () {
            document.body.style = `background-color:rgb(${randR},${randG},${randB})`;
            console.log(`${i}`);
        }, "1000"); 
    }
  }, "1000");
}

button.addEventListener("click", onClick2);
