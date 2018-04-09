<template>
  <div>
    <div class="circle_background"></div>
    <div class='_form'>
      <h3>请输入柱子信息</h3>
      <div class="__head">
        <img :src="head" @click="chooseHead" />
        <p>上传靓照</p>
      </div>
      <div>
        性别
        <span @click="chooseMale">
          <span class="radio" data-male='boy'
            :class="{checked: form.male === 'boy'}"
            >男</span>
          <span class="radio" data-male='girl'
            :class="{checked: form.male === 'girl'}"
            >女</span>
        </span>
      </div>
      <div>
        民族
        <span @click="chooseType">
          <span class="radio" data-type='dog'
            :class="{checked: form.type === 'dog'}"
            >汪汪</span>
          <span class="radio" data-type='cat'
            :class="{checked: form.type === 'cat'}"
            >喵喵</span>
        </span>
      </div>
      <div>
        生日
        <picker mode="date" :value='form.birthday' @change="chooseBirth">
          <div>{{ form.birthday }}</div>
        </picker>
      </div>
      <div>
        体重
        <span>{{ form.weight }}kg</span>
      </div>
      <div>
        一句话描述
        <span>{{ form.intro }}</span>
      </div>
      <div>
        是否绝育
        <span @click="chooseNoJJ">
          <span class="radio" data-jj='0'
            :class="{checked: form.jj === 0}"
            >未绝育</span>
          <span class="radio" data-jj='1'
            :class="{checked: form.jj === 1}"
            >已绝育</span>
        </span>
      </div>
      <div class="_save">
        <a class="button" @click="create">{{'保存'}}</a>
        <p class="__tips">请认真填写主子信息，虚假身份，广告，侮辱性的萌卡将被删除</p>
      </div>
    </div>
    <alert></alert>
  </div>
</template>

<script>
import Hat from '@/utils/wx'
import alert from '@/components/base/alert'

import { getRefByTags } from '@/utils/utils'

export default {
  components: { alert },
  data () {
    return {
      head: '',
      form: {
        male: 'boy',
        type: 'cat',
        jj: 0,
        birthday: '2018-01-01',
        weight: 10,
        intro: 'me me me!'
      }
    }
  },
  methods: {
    chooseMale ({ target }) {
      this.form.male = target.dataset.male
    },
    chooseType ({ target }) {
      this.form.type = target.dataset.type
    },
    chooseNoJJ ({ target }) {
      this.form.jj = +target.dataset.jj
    },
    chooseBirth ({ target }) {
      this.form.birthday = target.value
    },
    async chooseHead () {
      let { tempFilePaths } = await Hat.chooseImage({ count: 1 })
      this.head = tempFilePaths[0]
    },
    create () {
      this.$refs.alert[0].alert('fdsafdsa', {
        confirmButtonText: '保存'
      }).then(() => {
        // console.log('true')
      })
    }
  },
  mounted () {
    this.$refs = getRefByTags(this, ['alert'])
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.circle_background {
  position: fixed;
}
._form {
  padding: 0 30px;
  padding-top: 110px;
  position: relative;

  > div {
    padding: 10px 0;
  }

  picker {
    display: inline-block;
  }
}

.__head {
  position: fixed;
  top: 20px;
  right: 20px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: red;
  }
}

._save {
  text-align: center;
  margin-top: 40px;

  .button {
    font-size: @font-lg * 3 / 2;
    margin: 10px 0;
    padding: 4px 0;
    width: 180px;
  }

  .__tips {
    font-size: @font-sm;
    color: @gray;
  }
}
</style>
