const commentId = document.querySelector('input[name="comment-id"]');

const editFormHandler = async function (event) {
  event.preventDefault();

  const body = document.querySelector('textarea[name="comment-body"]').value;

  await fetch(`/api/comment/${commentId}`, {
    method: "PUT",
    body: JSON.stringify({
      postId,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/profile");
};

const deleteClickHandler = async function () {
  await fetch(`/api/comment/${commentId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-comment-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
