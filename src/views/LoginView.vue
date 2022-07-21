<template>
  <section>
    <div class="container">
      <div class="login-wrap">
        <img src="../assets/images/icon_police_badge.png" alt="logo" />
        <h1>罗甸县公安局警力分布系统</h1>
        <a-form
          :model="formState"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[{ required: true, message: '请输入账号！' }]"
          >
            <a-input
              v-model:value="formState.username"
              placeholder="请输入账号"
            >
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入账号！' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="请输入密码"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              block
              :disabled="formState.user === '' || formState.password === ''"
              >登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { Form, Button, Input } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AInputPassword: Input.Password,
    AButton: Button,
    UserOutlined,
    LockOutlined
  },
  setup () {
    const formState = reactive({
      username: '',
      password: ''
    })

    const onFinish = values => {
      console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }

    return {
      formState,
      onFinish,
      onFinishFailed
    }
  }
})
</script>
<style scoped lang="less">
section {
  height: 100vh;
  background: #d8d8d8 linear-gradient(180deg, #161e86 0%, #131724 100%);
}
.container {
  width: 1500px;
  height: 100%;
  margin: 0 auto;
  background: url("@/assets/images/login_bg.png") no-repeat left center, linear-gradient(180deg, #161e86 0%, #131724 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.login-wrap {
  width: 430px;
  padding: 78px 45px;
  background-color: #fff;
  border-radius: 10px;
  img {
    width: 70px;
    height: 70px;
  }
  h1 {
    height: 40px;
    font-size: 28px;
    font-weight: 500;
    color: #353535;
    line-height: 40px;
    margin: 30px auto;
  }
  .ant-form {
    .ant-form-item {
      &:last-child {
        margin-bottom: 0;
      }
      .ant-input-affix-wrapper {
        font-size: 20px;
      }
    }
    :deep(.ant-input) {
      width: 340px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      color: #b2b2b2;
      line-height: 40px;
    }
    .ant-btn {
      width: 340px;
      height: 50px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
    }
  }
}
</style>
