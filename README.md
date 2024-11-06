# Day 2 - Nuxt3 專案引入 CSS 樣式 題目


請 clone 這一份模板，在 Nuxt3 引入 Bootstrap5  v5.3.3 並達成以下條件 :
- 設置  assets/stylesheets   資料夾，在內層新增 all.scss 檔案並引入以下 [bootstrap5 的 SCSS](https://getbootstrap.com/docs/5.3/customize/sass/#importing)

```scss
// assets/stylesheets/all.scss

@import "bootstrap/scss/functions";

@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";

@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

@import "bootstrap/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/containers";

@import "bootstrap/scss/buttons";

@import "bootstrap/scss/utilities/api";

```

- 在 Nuxt.config.ts 將  all.scss 加入全域共用樣式
- 新增 page/index 頁面，並使用 Bootstrap5  [按鈕元件](https://getbootstrap.com/docs/5.3/components/buttons/#variants)
- 在 Nuxt.config.ts 設定全域共用 bootstrap5  的 SCSS 變數 ，並且可以直接使用在 .vue 檔案內的 `<style></style>`


## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day2-style  https://github.com/jasonlu0525/nuxt3-live-question.git day2-style-question
```

### 移動到專案內

```bash
cd  day2-style-question 
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```