<template>
  <div class="content">
    <h2 class="title">文件上传组件的应用</h2>
    <div class="part1">
      <el-upload
        class="upload-demo"
        ref="upload"
        action=""
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="onChange"
        :before-upload="beforeUpload"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
    </div>
  </div>
</template>
<script>
import * as service from '../../api/service.js'
export default{
  data(){
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods: {
    submitUpload() {//点击上传到服务器
      // this.$refs.upload.submit();
      const formData = new FormData()

      let data = {
        taskId: '000',
        userName: '刘备'
      }
      for(var key in data){
        formData.append(key, data[key])
      }
    
      this.fileList.forEach((item,index)=>{
        formData.append('files', item, item.raw)
        console.log("typeof(item.raw)")
        console.log(typeof(item.raw))
      })

      for (var key of formData.keys()) {
        console.log(key); 
      }
      service.uploadFile(formData).then((res)=>{
        console.log(res)

      })
    },
    handleRemove(file, fileList) {//删除文件之前的钩子
      console.log(file, fileList);
    },
    handlePreview(file) {//点击文件列表中已上传的文件时的钩子
      console.log(file);
    },
    onChange(file, fileList){//文件状态改变
      console.log("onChange文件状态改变")
      console.log(file)
      console.log(fileList)
      this.fileList = fileList

    },
    beforeUpload(file){//上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。

    }
  },
  mounted(){


  }
}
</script>
<style scoped>
.part1{
  padding: 10px;
  border: 1px solid #409EFF;
}
</style>