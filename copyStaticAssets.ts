import * as shell from "shelljs";

shell.cp("-R", "src/public/js/lib", "dist/public/js/");
shell.cp("-R", "src/public/fonts", "dist/public/");
shell.cp("-R", "src/public/images", "dist/public/");
shell.cp("-Rf", "src/public/index.html", "dist/public/index.html");
shell.cp("-Rf", "src/public/choice.html", "dist/public/choice.html");
shell.cp("-Rf", "src/public/signup.html", "dist/public/signup.html");
shell.cp("-Rf", "src/public/prod/css", "dist/public/");
shell.cp("-Rf", "src/public/prod/img", "dist/public/");
shell.cp("-Rf", "src/public/prod/js", "dist/public/");
shell.cp("-Rf", "src/public/prod/piskelapp-partials", "dist/public/");
shell.cp("-Rf", "src/public/prod/logo.png", "dist/public");
shell.cp("-Rf", "src/public/prod/index.html", "dist/public/pixel-editor-piskel.html");
