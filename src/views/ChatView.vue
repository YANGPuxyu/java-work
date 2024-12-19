<script setup lang="ts">
import { type CustomFormData } from '@/model/CustomFormData'; // 导入自定义表单数据类型

import ContactsCard from '@/components/ContactsCard.vue'; // 导入联系人卡片组件

import { useUserStore } from '@/store/userStore'; // 导入用户存储

import { useEasyForm } from '@/composables/EasyForm'; // 导入表单处理函数

import { CreateChatRoom } from '@/api/ChatRoomApi/Create'; // 导入创建聊天室的API

const userStore = useUserStore(); // 使用用户存储
const { user } = userStore; // 从用户存储中获取用户信息

const inputData:CustomFormData[] = [{
  id: 'chatRoomName',
  label: '聊天室名称',
  value: '',
  type: 'text',
  autocomplete: 'off',
}]; // 定义创建聊天室的表单数据

const createChatRoom = () => {
  useEasyForm(inputData,(id:number)=>{
    CreateChatRoom({
      name: inputData[0].value,
      courseId: id,
    });
  });
}; // 定义创建聊天室的函数，使用表单数据调用创建聊天室的API

const addFriendData:CustomFormData[] = [{
  id: 'friendId',
  label: 'friendId',
  value: '',
  type: 'number',
  autocomplete: 'off',
}]; // 定义添加好友的表单数据

const addFriend = () => {

}; // 定义添加好友的函数，目前为空
</script>

<template>
  <div class="w-3/4 h-full mx-auto mt-10 flex flex-row">
    <div class="w-1/12 flex flex-col">
      <img
        class="w-full scale-75"
        :src="!!user.profilePicture ? '' : '/default-avatar.svg'"
        :alt="user.username"
      /> <!-- 用户头像，如果没有头像则显示默认头像 -->
      <span class="text-center my-5" @click="addFriend">+</span> <!-- 添加好友按钮 -->
      <span class="text-center my-5" @click="createChatRoom">+</span> <!-- 创建聊天室按钮 -->
      <span class="text-center my-5">人</span> <!-- 显示“人”字 -->
      <span class="text-center my-5">群</span> <!-- 显示“群”字 -->
    </div>
    <div class="custom-scrollbar w-1/6 max-h-[80vh] overflow-auto">
      <RouterLink v-for="index in 12" :key="index" :to="`/chat/${index}`">
        <ContactsCard :user="user" />
      </RouterLink> <!-- 循环显示联系人卡片 -->
    </div>
    <RouterView /> <!-- 显示路由视图 -->
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  @apply w-1;
}
/* // 自定义滚动条宽度 */

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-slate-200;
}
/* // 自定义滚动条轨道背景色 */

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-[#888] rounded-md border-2 border-slate-500;
}
/* // 自定义滚动条滑块样式 */

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-[#555];
}
/* // 自定义滚动条滑块悬停样式 */
</style>
