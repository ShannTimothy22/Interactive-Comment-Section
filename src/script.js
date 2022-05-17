var data = {
  "currentUser": [{
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  }],
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}

var json = JSON.parse(JSON.stringify(data));

console.log(json.currentUser[0].image.png);

var inc_counter = function (event) {
  let id = event.target.dataset.num;
  var counter = document.getElementById(id + "-counter");
  counter.innerHTML++;
};

var dec_counter = function (event) {
  let id = event.target.dataset.num;
  var counter = document.getElementById(id + "-counter");
  counter.innerHTML--;
};

const commentItem = document.querySelector(".comment");
const userPic = document.querySelector(".user-pic");
const img = userPic.src;

var replyComment = function (event) {
  let id =
    event.target.parentElement.parentElement.parentElement.parentElement.dataset
      .num;
  var test = document.getElementById("comment-" + id);

  const div = document.createElement("div");

  div.innerHTML = `<div class="comment-inp">
  <div class="comment-inp__input">
      <textarea name="input-text" id="input-text" class="input-text" placeholder="Add a comment..."></textarea>
  </div>
  <div class="comment-inp__user">
      <img class="user-pic" src="${json.currentUser[0].image.png}" alt="user">
      <button id="send" class="send">send</button>
    </div>
  </div>`;
  test.append(div);
};

for (let i = 1; i < 3; i++) {
  var plus = document.getElementById("btn" + i + "-plus");
  var minus = document.getElementById("btn" + i + "-minus");
  var replies = document.getElementById("btn-" + i + "-reply");
  var deletes = document.getElementById("delete-" + i);
  var edits = document.getElementById("edit-" + i);
  plus.onclick = inc_counter;
  minus.onclick = dec_counter;
  replies.onclick = replyComment;
}

const text = document.getElementById("input-text");
const send = document.getElementById("send");
const commentWrapper = document.querySelector(".comment-item-wrapper");

send.addEventListener("click", sendComment);

function sendComment() {
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const reply = document.getElementById("reply");
  const edit = document.getElementById("edit");
  const deletes = document.getElementById("delete");

  const div = document.createElement("div");

  const imgPlus = plus.src;
  const imgMinus = minus.src;
  const imgReply = reply.src;
  const imgEdit = edit.src;
  const imgDelete = deletes.src;

  const comment = getComment();
  div.innerHTML = `<div class="comment-item">
  <div class="comment-item__header">
      <img class="profile-pic" src="${img}" alt="profile-pic">
      <span class="user-name">amyrobson</span>
      <span class="date text-secondary">1 month ago</span>
  </div>
  <div class="comment-item__comment">
      <p class="comment text-secondary">${comment}</p>
  </div>
  <div class="comment-item__footer">
      <div class="rating">
        <img class="plus" src="${imgPlus}" alt="plus">
        <span class="point">2</span>
        <img class="minus" src="${imgMinus}" alt="minus">
      </div>
      <div class="action">
          <span class="reply"><img id="reply" src="${imgReply}" alt="reply">reply</span>
          <span class="delete"><img id="delete" src="${imgDelete}" alt="delete">delete</span>
          <span class="edit"><img id="edit" src="${imgEdit}" alt="edit">edit</span>
      </div>
  </div>
</div>`;
  commentWrapper.append(div);
}

// const reply = document.querySelectorAll(".reply");

// reply.forEach(function (e) {
//   e.addEventListener("click", replyComment);
// });

function getComment() {
  let comment = text.value;
  return comment;
}
