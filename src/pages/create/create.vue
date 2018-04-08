<template>
  <div>
    <div class="circle_background"></div>
    <div class='_form'>
      <h3>请输入柱子信息</h3>
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
        <picker mode="date" :value='birthday'>
          <div>{{ birthday }}</div>
        </picker>
      </div>
      <div>
        体重
        <span>2018-01-01</span>
        <div>{{ birthday }}</div>
      </div>
      <div>
        一句话描述
        <span>2018-01-01</span>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        male: 'boy',
        type: 'cat',
        jj: 0,
        birthday: '2018-01-01'
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
    }
  }
}
</script>

<style lang="less" scoped>
._form {
  padding: 0 30px;

  > div {
    padding: 10px 0;
  }

  picker {
    display: inline-block;
  }
}
</style>
