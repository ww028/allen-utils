const fs = require("fs");
const path = require("path");

// 读取 package.json 的版本号
const pkg = require("./package.json");
const version = pkg.version;

// 读取 README.md 内容
const readmePath = path.join(__dirname, "./README.md");
let readmeContent = fs.readFileSync(readmePath, "utf8");

// 替换版本号（匹配「📌 当前版本：vxxx」的格式）
readmeContent = readmeContent.replace(
  /📌 当前版本：v\d+\.\d+\.\d+/,
  `📌 当前版本：v${version}`,
);

// 写回 README.md
fs.writeFileSync(readmePath, readmeContent, "utf8");
console.log(`✅ README 版本号已更新为 v${version}`);
