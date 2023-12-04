document.membershipForm.onsubmit = (e) => {
  const isValidUsername = /^[A-Za-z0-9가-힣 ]{2,}$/.test(username.value);
  const isValidComments = /^.{2,}$/.test(comments.value);

  if (!isValidUsername) {
    alert("유효한 이름을 입력해주세요.");
    return false;
  }

  if (!isValidComments) {
    alert("하고 싶으신 말씀이 없으세요...?(╯°□°）╯︵ ┻━┻");
    return false;
  }
};

const username = document.querySelector("#username");
const userId = document.querySelector("#userId");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const comments = document.querySelector("#comments");

//작성 날짜
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
const day = String(currentDate.getDate()).padStart(2, '0');

const currentHour = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

const createdAt = `${year}-${month}-${day} ${currentHour}:${currentMinutes}:${currentSeconds}`;
console.log(createdAt);

const saveMember = () => {
  // localStorage에 저장
  const members = JSON.parse(localStorage.getItem("members")) || [];
  members.push(
    new Member(
      username.value,
      userId.value,
      password.value,
      confirmPassword.value,
      comments.value,
      createdAt
    )
  );
  console.log(members);

  localStorage.setItem("members", JSON.stringify(members));

  // 초기화
  // username.value = "";
  // userId.value = "";
  // password.value = "";
  // confirmPassword.value = "";
  // comments.value = "";

  alert("회원가입이 완료되었습니다.");

  // 가입시 members 페이지로 이동
  window.location.href = "realindex.html";
};

class Member {
  constructor(
    username,
    userId,
    password,
    confirmPassword,
    comments,
    createdAt
  ) {
    this.username = username;
    this.userId = userId;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.comments = comments;
    this.createdAt = createdAt;
  }
}
