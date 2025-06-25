<script setup>
import { reactive, onMounted } from "vue"; // onMounted 최초 딱한번만 실행하고싶다
import { HttpService } from "@/services/HttpService";

const httpService = new HttpService();

const state = reactive({
  memos: [],
});

onMounted(async () => {
  getItems();
});

const getItems = async () => {
  state.memos = await httpService.getItems();
}

const remove = async id => {
  console.log('id:',id)
  const result = await httpService.delItem(id);
  if(result === '성공') {
    getItems();
  }
}

</script>

<template>
  <div class="memo-list">
    <router-link v-for="m in state.memos" :key="m.id" :to="`/memos/${m.id}`" class="item">
      <div class="d-flex pt-3">
        <div class="pb-3 mb-0 w-100">
          <div class="d-flex justify-content-between">
            <b>{{ m.title }}</b>
              <div>
                <span role="button" @click.prevent="remove(m.id)">삭제</span>
                <!-- @click.prevent 전파되는걸 막음 ,버블링막아줌 -->
              </div>
          </div>
          <div class="mt-2">{{ m.content }}</div>
        </div>
      </div>
    </router-link>
    <router-link to="/memos/add" class="add btn btn-light">
      <!-- 라우터 뷰의 주소를 바꾸겠다 -->
      +추가하기
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.memo-list{
  .item{
    background-color: #f8f9fa;
    border: 1px solid #eee;
    display: block;
    color:#000;
    text-decoration: none;
    padding: 20px 30px;
    margin: 15px 0;

    &:hover {
      border-color: #aaa;
    }
  }

}
.add{
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}
</style>
