# blog_by_vuepress
Blog based on vuepress v1

## run & build
```shell
# before run
yarn install
# run
yarn blog:dev
# build
yarn blog:build
```

## node version
v16.20.0

## package
<!-- yarn add -D vuepress
yarn add -D @vuepress/plugin-blog
yarn add -D vuepress-plugin-code-copy -->
vuepress = "1.9.10"<br>
@vuepress/plugin-blog = "1.9.4"<br>
vuepress-plugin-code-copy = "1.0.6"<br>

## update online
```bash
cd ../blog_by_vuepress && yarn blog:build
cd ../SayNop.github.io && ./update.sh
```
