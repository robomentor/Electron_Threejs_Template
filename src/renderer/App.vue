<template>
    <router-view ref="routerView" />
</template>

<script lang="ts">
    import {defineComponent, onBeforeUnmount, onUnmounted} from "vue";
    export default defineComponent({
        name: "App",
        components: {

        },
        setup(props, context) {

            onBeforeUnmount(()=>{
                // 离开页面之前需要执行的业务
            });

            onUnmounted(()=>{
                // 离开页面之后需要执行的业务
            });

            return {
                props
            }
        }
    });
</script>

<style>
    @import "./assets/css/base.scss";
    @import "./assets/css/common.scss";
    @import "./assets/css/editor.scss";
</style>
