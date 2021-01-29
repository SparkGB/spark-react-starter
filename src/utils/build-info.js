function print(title, info) {
  // eslint-disable-next-line
  console.log(
    `%c ${title} %c ${info} %c`,
    "background: #ff1449; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background: #0089f4; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:transparent"
  );
}

export default function printBuildInfo() {
  print("Version", process.env.REACT_APP_VERSION);
  print("Branch", process.env.REACT_APP_GIT_BRANCH);
  print("Commit", process.env.REACT_APP_GIT_COMMIT);
  print("Build Time", process.env.REACT_APP_BUILD_TIME);
}
