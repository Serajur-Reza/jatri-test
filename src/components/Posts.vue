<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="posts"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="row"
      :globalFilterFields="['title']"
    >
      <template #header>
        <div class="flex justify-content-end">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['title'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>

      <Column field="userId" header="UserId"></Column>
      <Column field="id" header="Id"></Column>
      <Column field="title" header="Title" sortable=""></Column>
      <Column field="body" header="Body"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { usePostStore } from "./../store/posts/post";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from "primevue/api";
const store = usePostStore();
onMounted(() => {
  store.fetchPosts();
});

const posts = computed(() => {
  console.log(store.posts);
  return store.posts;
});

const filters = ref({
  // global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  title: { value: null, matchMode: FilterMatchMode.CONTAINS },
  // "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  // representative: { value: null, matchMode: FilterMatchMode.IN },
  // status: { value: null, matchMode: FilterMatchMode.EQUALS },
  // verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
</script>
