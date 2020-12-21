<template>
  <div class="teacher-tree">
    <el-tree
      :data="list"
      node-key="index"
      default-expand-all
      :draggable='canDragger'
      empty-text='暂无老师信息'
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
      <div class="item" slot-scope="{ node, data }">
        <div class="left">
          <div class="round" :style="'background:'+data.backgimg"></div>
        </div>
        <div class="right">
          <div class="top">
            <pre>{{data.title}}</pre>
            <div>
              <i class="el-icon-rank icon" @mousedown="canDragFn(node, data)" @mouseup="notDragFn(node,data)"></i>
            </div>
          </div>
          <div class="middle">{{data.position}}</div>
          <div class="bottom">{{data.desc}}</div>
        </div>
      </div>
    </el-tree>
  </div>
</template>

<script>
import {
  Tree 
} from 'element-ui'
export default {
  name:'TeacherInduction',
  data(){
    return {
      canDragger:false,
      list:[{
        id:1,
        backgimg:'chartreuse',
        title:'陆测试 · 北京大学 课程负责人',
        position:'教授',
        desc:"著名学习专家、管理学家、哲学家。获得上海外国语大学博士学位。中央党校教授，博导，中央党校报刊社原总编辑。曾在中国科学院、国家体改委、民政部、光明日报社、企业等单位工作。中国学习型组织、学习型社会创建工作最早推动者，有开创性、独特贡献。研究领域涉及管理学、经济学、哲学，提出“升级才能生存”、“链式学习法”等产生广泛社会影响的理念和方法。"
      },{
        id:2,
        backgimg:'cyan',
        title:'陆测试 · 北京大学 课程负责人',
        position:'教授',
        desc:"著名学习专家、管理学家、哲学家。获得上海外国语大学博士学位。中央党校教授，博导，中央党校报刊社原总编辑。曾在中国科学院、国家体改委、民政部、光明日报社、企业等单位工作。中国学习型组织、学习型社会创建工作最早推动者，有开创性、独特贡献。研究领域涉及管理学、经济学、哲学，提出“升级才能生存”、“链式学习法”等产生广泛社会影响的理念和方法。"
      },{
        id:3,
        backgimg:'blue',
        title:'陆测试 · 北京大学 课程负责人',
        position:'教授',
        desc:"著名学习专家、管理学家、哲学家。获得上海外国语大学博士学位。中央党校教授，博导，中央党校报刊社原总编辑。曾在中国科学院、国家体改委、民政部、光明日报社、企业等单位工作。中国学习型组织、学习型社会创建工作最早推动者，有开创性、独特贡献。研究领域涉及管理学、经济学、哲学，提出“升级才能生存”、“链式学习法”等产生广泛社会影响的理念和方法。"
      },{
        id:4,
        backgimg:'red',
        title:'陆测试 · 北京大学 课程负责人',
        position:'教授',
        desc:"著名学习专家、管理学家、哲学家。获得上海外国语大学博士学位。中央党校教授，博导，中央党校报刊社原总编辑。曾在中国科学院、国家体改委、民政部、光明日报社、企业等单位工作。中国学习型组织、学习型社会创建工作最早推动者，有开创性、独特贡献。研究领域涉及管理学、经济学、哲学，提出“升级才能生存”、“链式学习法”等产生广泛社会影响的理念和方法。"
      },{
        id:5,
        backgimg:'yellow',
        title:'陆测试 · 北京大学 课程负责人',
        position:'教授',
        desc:"著名学习专家、管理学家、哲学家。获得上海外国语大学博士学位。中央党校教授，博导，中央党校报刊社原总编辑。曾在中国科学院、国家体改委、民政部、光明日报社、企业等单位工作。中国学习型组织、学习型社会创建工作最早推动者，有开创性、独特贡献。研究领域涉及管理学、经济学、哲学，提出“升级才能生存”、“链式学习法”等产生广泛社会影响的理念和方法。"
      }]
    }
  },
  components:{
    'el-tree':Tree,
  },
  methods:{
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      draggingNode.data.isDrag = false;
      this.canDragger = false;
    },
    allowDrop(draggingNode, dropNode, type) {
      return type === 'prev' || type === 'next'
    },
    allowDrag(draggingNode) {
      return draggingNode.data.isDrag;
    },
    canDragFn(node,data){
      data.isDrag = true;
      this.canDragger = true;
      this.list.map((item,index)=>{
        item.id = index
      })
    },
    notDragFn(node,data){
      data.isDrag = false;
      this.canDragger = false;
    },


    handleDragStart(node, ev) {
      // console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      // console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      // console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      // console.log('tree drag over: ', dropNode.label);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      // console.log('tree drop: ', dropNode.label, dropType);
    },
  }
}
</script>

<style lang="less">
  *{
    padding:0px;
    margin:0px;
  }
  .teacher-tree{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    .item{
      width: 1200px;
      display: flex;

      .left{
        width: 75px;
        .round{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: chartreuse;
        }
      }
      .right{
        flex:1;
        display: flex;
        flex-direction: column;
        color: #333;
        font-size: 14px;
        .top{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 10px;
          padding-right: 20px;
          .icon{
            font-size: 20px;
            cursor: pointer;
          }
        }
        .middle{
          margin-bottom: 10px;
        }
        .bottom{
          white-space:break-spaces;
        }
      }
    }
    .el-tree-node+.el-tree-node{
      margin-top: 50px;
    }

    .is-leaf{
      display: none;
    }
    .el-tree-node__content{
      height: auto;
      background: white;
      cursor: default;
    }
    .el-tree-node__content:hover{
      background-color:#fff;
    }
    .el-tree-node:focus>.el-tree-node__content{
      background-color:#fff;
    }
    .el-tree__drop-indicator{
      background-color:#fff;
    }
  }
</style>