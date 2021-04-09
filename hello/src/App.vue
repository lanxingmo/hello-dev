<template>
  <div className="main">
    <div id="app"></div>
    <h3>EMP Vue2 App</h3>
    <img src="./logo.png"/>
    <hello-react />
  </div>
</template>

<script>
import Content from "./components/Content";
import {ReactInVue} from "vuera";


const HelloReact = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('empReactBase/components/Hello').then(res => {

    return ReactInVue(res.default)
  }),
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 0,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 30000
});
export default {
  mounted() {
    // 将h5RenderData方法绑定到window下面，提供给外部调用
    window._server = "/api/urule";
  },
  components: {
    Content,
    "hello-react": HelloReact
  },
};
</script>

<style scoped>
.main {
  text-align: center;
}

img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
