<template>
    <div class="develop-simulation-view">
        <div class="editor-item">
            <div class="simulation-item">
                <Toolbar />
            </div>
            <div class="simulation-item">
                <div class="header-tab">
                    <div class="header-tab-item" :class="pageData.editor.tab.value === 'node' ? 'checked' : ''" @click="onSwitchTab('node')">节点</div>
                    <div class="header-tab-item" :class="pageData.editor.tab.value === 'resource' ? 'checked' : ''" @click="onSwitchTab('resource')">资源库</div>
                </div>
                <div class="left-tree">
                    <SceneGraph v-if="pageData.editor.tab.value === 'node'" />
                    <Library v-if="pageData.editor.tab.value === 'resource'" />
                </div>
            </div>
            <div class="simulation-item">
                <div class="pane-item">
                    <div class="world-item">
                        <div class="world-view">
                            <div class="world-box">
                                <World />
                            </div>
                        </div>
                        <div class="world-resource">
                            <div class="resource-hd">
                                <div class="item-box">
                                    <i class="iconfont icon-chexiao"></i>
                                </div>
                                <div class="item-box">
                                    <i class="iconfont icon-fanhui"></i>
                                </div>
                                <div class="item-box line"></div>
                                <div class="item-box">
                                    <i class="iconfont icon-refresh"></i>
                                </div>
                                <div class="item-box line"></div>
                                <div class="item-box">
                                    <i class="iconfont icon-download"></i>
                                </div>
                                <div class="item-box">
                                    <i class="iconfont icon-link"></i>
                                </div>
                                <div class="item-box right">
                                    <el-input size="small" clearable style="width: 220px" v-model="pageData.editor.directory.search.Keyword" maxlength="24" placeholder="输入关键词回车搜索" autocomplete="off" spellcheck="false" class="geek-el-input resource"></el-input>
                                </div>
                            </div>
                            <div class="resource-box">
                                <div class="directory-box">
                                    <el-row :gutter="5">
                                        <el-col :xs="12" :sm="8" :md="6" :lg="5" :xl="2">
                                            <div class="grid-content">
                                                <div class="icon-box">
                                                    <i class="iconfont icon-folder"></i>
                                                </div>
                                                <div class="title">assets</div>
                                            </div>
                                        </el-col>
                                        <el-col :xs="12" :sm="8" :md="6" :lg="5" :xl="2">
                                            <div class="grid-content">
                                                <div class="icon-box">
                                                    <i class="iconfont icon-product1"></i>
                                                </div>
                                                <div class="title">robot.glb</div>
                                            </div>
                                        </el-col>
                                        <el-col :xs="12" :sm="8" :md="6" :lg="5" :xl="2">
                                            <div class="grid-content">
                                                <div class="icon-box">
                                                    <i class="iconfont icon-code1"></i>
                                                </div>
                                                <div class="title">index.html</div>
                                            </div>
                                        </el-col>
                                        <el-col :xs="12" :sm="8" :md="6" :lg="5" :xl="2">
                                            <div class="grid-content">
                                                <div class="icon-box">
                                                    <i class="iconfont icon-document"></i>
                                                </div>
                                                <div class="title">config.plugin</div>
                                            </div>
                                        </el-col>
                                        <el-col :xs="12" :sm="8" :md="6" :lg="5" :xl="2">
                                            <div class="grid-content">
                                                <div class="icon-box">
                                                    <i class="iconfont icon-docjpge-fill"></i>
                                                </div>
                                                <div class="title">README.md</div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="world-item">
                        <Editor />
                    </div>
                </div>
            </div>
        </div>
        <div class="editor-item"></div>
    </div>
</template>

<script lang="ts">
import {ref, defineComponent, onBeforeUnmount, onUnmounted} from "vue";
import {Toolbar, SceneGraph, Library, Editor, World} from "lingo3d-vue";
export default defineComponent({
    name: "StartPage",
    components: {
        Toolbar,
        SceneGraph,
        Library,
        Editor,
        World,
    },
    setup(props, context) {

        const pageData: any = ref({
            editor: {
                tab: {
                    value: "node"
                },
                pane: {
                    value: "editor",
                    list: [
                        {
                            title: "3D",
                            path: "editor"
                        },
                        {
                            title: "Script",
                            path: "script",
                            code: ""
                        }
                    ]
                },
                directory: {
                    search: {
                        Keyword: ""
                    }
                }
            }
        });

        function onSwitchTab(tab: any){
            if(pageData.value.editor.tab.value !== tab){
                pageData.value.editor.tab.value = tab;
            }
        }

        onBeforeUnmount(()=>{

        });

        onUnmounted(()=>{

        });

        return {
            props,
            pageData,
            onSwitchTab
        }
    }
});
</script>

<style>
    .develop-simulation-view{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(40, 41, 46);
    }
    .develop-simulation-view .editor-item{
        width: 100%;
        height: calc(100% - 28px);
    }
    .develop-simulation-view .editor-item:last-child{
        height: 28px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .develop-simulation-view .simulation-item{
        width: calc(100% - 251px);
        height: 100%;
        display: inline-block;
        vertical-align: top;
    }
    .develop-simulation-view .simulation-item:first-child{
        width: 50px;
    }
    .develop-simulation-view .simulation-item:nth-child(2){
        width: 201px;
        border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
    .develop-simulation-view .simulation-item .header-tab{
        width: 100%;
        height: 30px;
        background-color: rgb(40, 41, 46);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .develop-simulation-view .simulation-item .header-tab .header-tab-item{
        width: 50%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        color: #666666;
    }
    .develop-simulation-view .simulation-item .header-tab .header-tab-item:hover{
        color: #999999;
        cursor: pointer;
    }
    .develop-simulation-view .simulation-item .header-tab .header-tab-item.checked{
        color: #999999;
    }
    .develop-simulation-view .simulation-item .left-tree{
        width: 100%;
        height: calc(100% - 30px);
    }

    .develop-simulation-view .simulation-item .pane-item{
        width: 100%;
        height: 100%;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item{
        width: calc(100% - 300px);
        height: 100%;
        display: inline-block;
        vertical-align: top;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item:last-child{
        width: 300px;
        border-left: 1px solid rgba(255, 255, 255, 0.05);
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-view{
        width: 100%;
        height: calc(100% - 260px);
        position: relative;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-view .world-box{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-view .lingo3d{
        position: unset;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource{
        width: 100%;
        height: 260px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd{
        width: 100%;
        height: 30px;
        background-color: rgba(255, 255, 255, .04);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding: 3px 5px;
        position: relative;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box{
        width: auto;
        height: 23px;
        line-height: 23px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        padding: 0 10px;
        background-color: rgba(255, 255, 255, .04);
        border-radius: 4px;
        margin-right: 5px;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box i{
        height: 23px;
        display: block;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box:hover{
        background-color: rgba(255, 255, 255, .08);
        cursor: pointer;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box:hover i{
        color: #999999;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box.line{
        width: 1px;
        background-color: rgba(255, 255, 255, 0);
        padding: 0;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-hd .item-box.right{
        background-color: rgba(255, 255, 255, 0);
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box{
        width: 100%;
        height: calc(100% - 30px);
        overflow-y: auto;
        padding: 5px;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box{
        width: 100%;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content{
        width: 100%;
        height: 100px;
        padding: 10px;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content:hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, .04);
        border-radius: 4px;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content .icon-box{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content .icon-box i{
        font-size: 36px;
        color: #666666;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content .title{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #666666;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content:hover .icon-box i{
        color: #999999;
    }
    .develop-simulation-view .simulation-item .pane-item .world-item .world-resource .resource-box .directory-box .grid-content:hover .title{
        color: #999999;
    }

    .geek-el-tabs.simulation-pane .el-tabs__header{
        height: 30px !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        background-color: rgb(40, 41, 46) !important;
    }
    .geek-el-tabs.simulation-pane .el-tabs__header .el-tabs__nav-wrap{
        height: 29px !important;
    }
    .geek-el-tabs.simulation-pane .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll{
        height: 29px !important;
    }
    .geek-el-tabs.simulation-pane .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{
        height: 29px !important;
    }
    .geek-el-tabs.simulation-pane .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{
        height: 29px !important;
    }
    .geek-el-tabs.simulation-pane .el-tabs__content{
        height: calc(100% - 30px) !important;
    }

    .geek-el-input.el-input.resource{
        height: 29px !important;
    }
    .geek-el-input.el-input.resource .el-input__wrapper{
        background-color: rgba(0, 0, 0, .2) !important;
        border: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
    }
    .geek-el-input.el-input.resource .el-input__wrapper input{
        height: 29px;
    }

    .develop-simulation-view .simulation-item .pane-item .ace-monokai{
        background-color: rgb(40, 41, 46) !important;
    }
    .develop-simulation-view .simulation-item .pane-item .ace-monokai .ace_gutter{
        background-color: rgba(0, 0, 0, .2) !important;
    }
</style>
