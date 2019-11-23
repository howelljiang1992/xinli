<template>
  <div class="report-wrap menulist">
    <div class="page-content">
      <div class="list-content">
        <div class="item-content">
          <div class="item-inner">
            <h2>血常规</h2>
            <p>2017年04月07日</p>
          </div>
          <!-- <div class="item-inner-right">
            <img class="item-img" src="../assets/assets/res/img/report/statubg-normal.jpg" />
          </div>-->
        </div>
        <!-- <div class="item-content">
          <div class="item-inner-left">
            <h2>血常规</h2>
            <p>2017年04月07日</p>
          </div>
          <div class="item-inner-right">
            <img class="item-img" src="../assets/assets/res/img/report/statubg-normal.jpg" />
          </div>
        </div>-->
        <!-- <div class="item-content">
          <div class="item-inner-left">
            <h2>血常规</h2>
            <p>2017年04月07日</p>
          </div>
          <div class="item-inner-right">
            <img class="item-img" src="../assets/assets/res/img/report/statubg-normal.jpg" />
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
body {
  background-color: #f0f2f4;
}

.list-content {
  margin-top: 20px;

  .item-content {
    position: relative;
    background-color: #fff;
    margin: 15px 10px 10px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.08);

    .item-inner {
    //   float: left;
      width: 80%; 
      &:after {
        content: " ";
        background-image: url("../assets/assets/res/img/report/statubg-normal.jpg");
      }
    }

    .item-inner-right {
      .item-img {
        width: 100px;
        height: 100px;
        vertical-align: middle;
      }
    }
  }
}
</style>