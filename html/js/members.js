const rendermembers = () => {
  const members = JSON.parse(localStorage.getItem("members")) || [];
  document.querySelector("table#viewMembers tbody").innerHTML = members.reduce(
    (html, { username, userId, comments, createdAt }, index) => {

      console.log(index, html);
      return `
            ${html}
            <tr>
                <td>${username}</td>
                <td>${userId}</td>
                <td>${comments}</td>
                <td>${createdAt}</td>
            </tr>`;
    },
    ""
  );
};

rendermembers();
