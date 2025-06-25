<script setup>
//메모등록 , 메모수정(메모디테일)route.params.id 이걸로 분기함 , 
import { reactive , onMounted} from "vue";
import { HttpService } from "@/services/HttpService";
import { useRoute,useRouter } from "vue-router";
//    패스베리어블 받을수잇고,

const httpService = new HttpService();

const router =useRouter();
const route = useRoute();


const state = reactive({
  memo: {
    id: 0,
    title: "",
    content: "",
    createdAT:''
  },
});
const submit = () => {    
    if(route.params.id) {
        httpService.setItem(state.memo);
    } else {
        httpService.addItem(state.memo);
    }
    alert('저장했습니다.');
    router.push({ path: '/' });
}

onMounted(async()=>{
    if(route.params.id){//값이 있다면 item 클릭 , 없다면 [+추가하기] 버튼클릭 
      state.memo = await httpService.getItem(route.params.id);
      state.memo.id = parseInt(route.params.id);
    }
});
</script>

<template>
  <h1>vue</h1>
  <form class="detail" @submit.prevent="submit">
    <div class="mb-3" v-if="state.memo.createdAT">
      등록일시: {{ state.memo.createdAT }}
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        type="text"
        id="title"
        class="form-control p-3"
        v-model="state.memo.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        id="content"
        class="form-control p-3"
        v-model="state.memo.content"
      ></textarea>
    </div>
    <button class="btn btn-primary w-100 py-3">저장</button>
  </form>
</template>

<style scoped></style>
