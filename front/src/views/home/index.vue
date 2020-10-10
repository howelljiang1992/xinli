<template>
  <div class="home">
    <div class="header">
      <div class="header-content">
        <div class="header-left">
          <img class="header-img" src="../../assets/logo3.png" />
          <span class="header-title">慧家教育</span>
        </div>
        <ul class="nav-bar">
          <li class="header-item active">首页</li>
          <li class="header-item">文章</li>
          <li class="header-item">问答</li>
          <li class="header-item">测试</li>
          <li class="header-item">课程</li>
          <li class="header-item">倾诉</li>
        </ul>

        <div class="search-wrap">
          <input class="search-input search" placeholder="搜索" />
          <img
            class="search_a"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAgBJREFUOBGtVL8vREEQnnnvnIhIiFKhQHONqEjkjpyLUqvSSFSUev/AdagkopLoRH134biESo5EQ6OgJRGF+7Xm23dzFs/jJTa523k73/ftzO7MMoWMUrk6Z5gWiUyGDA1ZCNMDEZfZ0EE2M14MobVhjufk/GasUX/bMYZmnOVvJjOdJLq6V2amUrdfnZ4uFCtXmUa9dgExZn6RaDZ8nyb8wWSf/YmNNfiAAbZwVk0rX2eGEUQGMTPAxCXyk8tz06l7BblzsXIzTM3ariGTFfGnRFdy0o00AXA7TSuWTY/nBGhcEdfGRrJxrnRaLcicBVf8s4rx7AVomhJZlJiSLCbA2vShoT4vuE25T0P5n9JUsDsHkVIea6oBWy5FSkOG75sjzHHGByfQANfr1Fl/8i6OmMUqR2vVCsZWiSZ4ZDtAQM+10WhoiFc5qiEQOUMuA9ps8kIIJXLpgxNoAOyhN2FIO63bosXHHwaw4ACqGrA9NDp6U4q0z3aAkSL4ZQiWuVnbAwdc97GQlInQ6GgjtBM6ICpS+IBpkZltN8Gxu38nGjwO1Godyq4DAkQH5G2daWnIBeDMkKbNhvhVarjXijGt5dIT27A7gviI+3zV62/zUsdb4IqSFf0kaB3yF+eBLZxernZEiZdCBVX4rzNE5dnblGPa/xdBbFysXI/0cP/jO+TD+9S+xiaiAAAAAElFTkSuQmCC"
            alt
          />
        </div>
      </div>
    </div>

    <swiper :options="swiperOption" ref="mySwiper">
      <!--轮播图-->
      <swiper-slide class="swiper-slide1">
        <img
          src="https://ossimg.xinli001.com/20191122/8f12fea15ceacdddc1134c2926a3d5d2.png?x-oss-process=image/quality,Q_80"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://ossimg.xinli001.com/20191118/14b8a355973db8427feb10ea9f3710b4.jpg?x-oss-process=image/quality,Q_80"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://ossimg.xinli001.com/20191122/87be8acbcb2a82d64a7f8535a7c518b5.jpg?x-oss-process=image/quality,Q_80"
        />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="content">
      <!--文章内容开始-->
      <div class="article-content">
        <div class="topic-wapper">
          <div class="article-topic">
            <span class="topic-item topic-item-active">最新热文</span>
            <span class="topic-item">家庭关系</span>
            <span class="topic-item">育儿经验</span>
            <span class="topic-item">孩子学习</span>
            <span class="topic-item">更多分类</span>
          </div>
          <span class="upload-btn">发布文章</span>
        </div>

        <div class="article-list">
          <div class="article-list-left">
            <div class="article-item">
              <img
                class="article-item-image"
                src="http://ossimg.xinli001.com/visioncn/600x400/VCG41479387393.jpg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="https://ossimg.xinli001.com/20191120/d8cb82c51da2dc96309778681b784d67.jpeg!120x120"
              />
              <div class="article-item-content">
                <p class="title">究竟什么样的人，才算是见过世面？</p>
                <p class="desc">当某一天，我们理清了自己跟世界的关系，并能很好地去接纳真实的世界，同时跟世界和谐相处的时候，我们才算...</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="https://ossimg.xinli001.com/20190201/be328223e14ed0a92713211be49e7a2f.jpeg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="http://ossimg.xinli001.com/visioncn/600x400/VCG41479387393.jpg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
          </div>
          <div class="article-list-right">
            <div class="article-item">
              <img
                class="article-item-image"
                src="https://ossimg.xinli001.com/20191122/1d5295985975f1f8e844c63a92c691fd.jpeg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="https://ossimg.xinli001.com/yestone/001_1534935846/D74688765_L.jpg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="https://ossimg.xinli001.com/20190310/e8f03ea0de892bd7645a116327990e7d.jpeg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
            <div class="article-item">
              <img
                class="article-item-image"
                src="http://ossimg.xinli001.com/visioncn/600x400/VCG41479387393.jpg!120x120"
              />
              <div class="article-item-content">
                <p class="title">如果早知道这些，能免去多少烦恼</p>
                <p class="desc">现在知道，还为时未晚</p>
                <p class="tag">#升级思维</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--文章内容结束-->
    </div>

    <!--问答内容开始-->
    <div class="questions-content">
      <div class="questions-wrapper">
        <div class="questions-label">
          <div class="questions-label-left">
            <span class="title-text">问答互动</span>
            <span class="title-desc">每个人的心事都能找到答案</span>
          </div>
          <div class="questions-label-right">
            <span>发布提问</span>
            <span class="question-number">100+</span>
            <span>个问答</span>
          </div>
        </div>
        <div class="questions-list">
          <div class="questions-list-left">
            <div class="questions-more">更多>></div>
            <div class="list-content">
              <div class="questions-item">
                <div class="item-title">
                  <span>【坚持树洞】你最想坚持下去做的事，是什么？</span>
                  <span class="answers-num">128个回答</span>
                  <span class="effect-num">有用59</span>
                </div>
                <div class="item-content">
                  <img
                    class="user-icon"
                    src="http://ossimg.xinli001.com/20190131/2cca599d2f19816eecc4843df438067c.jpg!80"
                  />
                  <p class="item-desc">我只希望自己能够坚持活下去，准确的来说……是生存</p>
                  <div class="item-tag-list">
                    <span class="item-tag">热点话题</span>
                    <span class="item-tag">互动反馈</span>
                    <span class="item-tag">热点话题</span>
                  </div>
                </div>
              </div>
              <div class="questions-item">
                <div class="item-title">
                  <span>【坚持树洞】你最想坚持下去做的事，是什么？</span>
                  <span class="answers-num">128个回答</span>
                  <span class="effect-num">有用59</span>
                </div>
                <div class="item-content">
                  <img
                    class="user-icon"
                    src="https://ossimg.xinli001.com/20191117/e604a52d8492a955bb7229705d4746ed.jpeg!80"
                  />
                  <p class="item-desc">我只希望自己能够坚持活下去，准确的来说……是生存我只希望自己能够坚持活下去，准确的来说……是生存</p>
                  <div class="item-tag-list">
                    <span class="item-tag">热点话题</span>
                    <span class="item-tag">互动反馈</span>
                    <span class="item-tag">热点话题</span>
                  </div>
                </div>
              </div>
              <div class="questions-item">
                <div class="item-title">
                  <span>【坚持树洞】你最想坚持下去做的事，是什么？</span>
                  <span class="answers-num">128个回答</span>
                  <span class="effect-num">有用59</span>
                </div>
                <div class="item-content">
                  <img
                    class="user-icon"
                    src="https://ossimg.xinli001.com/20181113/806eee237c29b9fda1f37990e2fe8436.jpg!80"
                  />
                  <p class="item-desc">我只希望自己能够坚持活下去，准确的来说……是生存</p>
                  <div class="item-tag-list">
                    <span class="item-tag">热点话题</span>
                    <span class="item-tag">互动反馈</span>
                    <span class="item-tag">热点话题</span>
                  </div>
                </div>
              </div>
              <div class="questions-item">
                <div class="item-title">
                  <span>【坚持树洞】你最想坚持下去做的事，是什么？</span>
                  <span class="answers-num">128个回答</span>
                  <span class="effect-num">有用59</span>
                </div>
                <div class="item-content">
                  <img
                    class="user-icon"
                    src="https://ossimg.xinli001.com/20170302/186e11e717d6538fc796f5d3221c4b66.png!80"
                  />
                  <p class="item-desc">我只希望自己能够坚持活下去，准确的来说……是生存我只希望自己能够坚持活下去，准确的来说……是生存</p>
                  <div class="item-tag-list">
                    <span class="item-tag">热点话题</span>
                    <span class="item-tag">互动反馈</span>
                    <span class="item-tag">热点话题</span>
                  </div>
                </div>
              </div>
              <div class="questions-item">
                <div class="item-title">
                  <span>【坚持树洞】你最想坚持下去做的事，是什么？</span>
                  <span class="answers-num">128个回答</span>
                  <span class="effect-num">有用59</span>
                </div>
                <div class="item-content">
                  <img
                    class="user-icon"
                    src="https://ossimg.xinli001.com/20181113/806eee237c29b9fda1f37990e2fe8436.jpg!80"
                  />
                  <p class="item-desc">我只希望自己能够坚持活下去，准确的来说……是生存</p>
                  <div class="item-tag-list">
                    <span class="item-tag">热点话题</span>
                    <span class="item-tag">互动反馈</span>
                    <span class="item-tag">热点话题</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="questions-list-top">
            <div class></div>
          </div>
        </div>
      </div>
    </div>
    <!--问答内容结束-->
    <!--教育测评开始-->
    <div class="ceping-content">
      <div class="ceping-wrapper">
        <div class="ceping-label">
          <div class="ceping-label-left">
            <span class="ceping-title">心理测试</span>
            <span class="ceping-desc">认识自己、了解他人</span>
          </div>
          <div class="ceping-label-right">
            <span>1600+趣味测试</span>
            <span>140+专业测评</span>>>
          </div>
        </div>

        <div class="ceping-list">
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20180123/ba9c4000fbb3bc868067cf81508a6003.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://image.xinli001.com/20160729/022007digek21fb5nydwo3.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20170509/82de077c3af5e250a12a30eca1a3a0ba.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20180404/c560c148e6994b3ec88a7f665a0388f8.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20180108/96137f952d3c064d711ab579543ae568.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://image.xinli001.com/20150107/13112691661d328add706c.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
          <div class="ceping-item">
            <img
              class="ceping-icon"
              src="https://ossimg.xinli001.com/20171225/16544aa48c890dd77ee4f8d8cadd0cb7.jpg?x-oss-process=image/quality,Q_80"
            />
            <div class="ceping-title">性格优势评估</div>
            <div class="ceping-statics">
              <span class="ceping-statics-tag">免费</span>
              <span class="ceping-statics-nums">34568人测试过</span>
            </div>
            <span class="go-test">去测试</span>
          </div>
        </div>
      </div>
    </div>
    <!--教育测评结束-->

    <!--底部页脚开始-->
    <div class="footer">
      <img src="../../assets/img/footer.png" />
    </div>
    <!--底部内容结束-->
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      console.log('test01');
      console.log('test02');
      console.log('test03');
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang="less">
@import "./home.less";
</style>