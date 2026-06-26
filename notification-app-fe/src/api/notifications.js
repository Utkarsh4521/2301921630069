export function fetchNotifications() {
    return fetch("http://4.224.186.213/evaluation-service/notifications", {
    method: "GET",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhaWRzMjMwMTBAZ2xiaXRtLmFjLmluIiwiZXhwIjoxNzgyNDU5MTE3LCJpYXQiOjE3ODI0NTgyMTcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkMGJjMTk5MC05ZDMxLTRhNzAtYWUwMS00ZWVkODIyM2IyZjYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ1dGthcnNoIGFnYXJ3YWwiLCJzdWIiOiJmZTI3NDQyNS0yYTk1LTQ0MjEtYjBlNy0wMDUyMjNkNmViMGQifSwiZW1haWwiOiJhaWRzMjMwMTBAZ2xiaXRtLmFjLmluIiwibmFtZSI6InV0a2Fyc2ggYWdhcndhbCIsInJvbGxObyI6IjIzMDE5MjE2MzAwNjkiLCJhY2Nlc3NDb2RlIjoieHhrSm5rIiwiY2xpZW50SUQiOiJmZTI3NDQyNS0yYTk1LTQ0MjEtYjBlNy0wMDUyMjNkNmViMGQiLCJjbGllbnRTZWNyZXQiOiJqSnJYeW50eUtOUGNQak1OIn0.x4FeNksc4KdMizMr5N2zUHObPqlKaCtTblLb4gltpus",
    },
  })
   .then(async (response) => {
  console.log(response.status);

  if (!response.ok) {
    console.log(await response.text());
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
});
}