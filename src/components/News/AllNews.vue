<template>
<section>
    <div class="content-header">
        <div class="container-fluid">
        <div class="row mb-2">
          <h1 class="mx-auto my-0">Новости</h1>
        </div>
      </div>
</div>
<div class="container-fluid">
                       <b-table
                      head-variant="light"
                      hover
                      id="halls"
                      outlined
                      responsive
                      :per-page="perPage"
                      :current-page="currentPage"
                      :fields="keys"
                      :items="items"
                    >
                      <template #cell(edit)="data">
                        <router-link
                          :disabled="show"
                          class="btn btn-warning"
                          :to="{ name: 'AllNews', params: { id: data.value } }"
                          ><i class="fas fa-tools"></i
                        ></router-link>
                      </template>
                      <template #cell(remove)="data">
                        <b-button
                          :disabled="show"
                          @click="remove(data.value)"
                          variant="danger"
                          ><i class="fas fa-trash-alt"></i
                        ></b-button>
                      </template>
                    </b-table>
                    <b-pagination
                      aria-controls="halls"
                      :total-rows="rows"
                      :per-page="perPage"
                      align="center"
                      v-model="currentPage"
                      pills
                    ></b-pagination>

                    <b-container class="w-100 text-center">
                      <b-button :disabled="show" variant="primary" @click="add"
                        >ДОБАВИТЬ НОВОСТЬ</b-button
                      >
                    </b-container>
  </div>
</section>

</template>

<script>
import { saveDb} from "@/modules/firebase";
export default {
  name: "AllNews",
  data(){
      return{
          loaded:true,
      show: false,
      perPage: 5,
      currentPage: 1,
      keys: [
        { key: "title", label: "Номер" },
        { key: "date", label: "Дата создания" },
        { key: "status", label: "Статус" },
        { key: "edit", label: "" },
        { key: "remove", label: "" },
      ],

      }
  },
  methods:{
        async add() {
      this.items.push(
           { name: '', date: '', status: '' },
      );
      await saveDb("/news", this.items);
      this.$router.push({
        name: "CurNews",
        params: { id: `${this.items.length - 1}` },
      });
    },
  }
};
</script>

<style></style>
