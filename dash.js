const tableSpace = document.getElementById("table");
const input = document.querySelector("input");

function universal(arrayInput) {
  const usableData = arrayInput
    .map((item) => {
      return `
            <tr>
              <td class="pic">
                <div class="img-name">
                  <img class="images" src="img/dface.jpg" alt="" />
                  <p class="name">${item.name}</p>
                </div>
              </td>
              <td class="email">${item.email}</td>
              <td class="title">${item.username}</td>
              <td>
                <button class="table-btn">
                  <div class="dot"></div>
                  <p>active</p>
                </button>
              </td>
              <td class="time">${item.website}</td>
            </tr>`;
    })
    .join("");

    tableSpace.innerHTML = usableData;
}

let realdata = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    realdata=data
    universal(data);
  });

input.addEventListener("keyup", (e) => {
  e.preventDefault();

  const filteredData = realdata.filter((item) => {
    if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
      return true;
    }
    return false;
  });

  universal(filteredData);
});
