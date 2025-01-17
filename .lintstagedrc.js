const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildStylelintCommand = (filenames) =>
  `stylelint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")} --fix`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
  "*.{md,html,css}": [buildPrettierCommand, buildStylelintCommand],
};
