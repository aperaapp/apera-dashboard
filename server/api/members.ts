const members = [
  {
    name: "Just Patrick",
    username: "just_patrick",
    role: "Admin",
    avatar: { src: "https://avatars.githubusercontent.com/u/56973177" },
  },
];

export default eventHandler(async () => {
  return members;
});
