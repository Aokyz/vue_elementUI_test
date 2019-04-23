<template>
  <div class="wrap">
    <div class="upload-picture">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-progress="showProgress"
        :on-error="onError">
        <button>上传图片</button>
      </el-upload>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="percent" status="exception" v-if="percent>0"></el-progress>
    </div>

  </div>


  <!--<el-dialog :visible.sync="dialogVisible">-->
    <!--<img width="100%" :src="dialogImageUrl" alt="">-->
  <!--</el-dialog>-->
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        percent:0,
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      showProgress(event,file,fileList){
        console.log(event)
        this.percent = event.percent;
      },
      onError(err,file,fileList){
        console.log('错误',err)
      }
    }
  }
</script>

