<script setup>
import { reactive, watch, ref, onMounted, defineEmits } from 'vue'
import debounce from 'lodash.debounce'
import CardList from '../components/CardList.vue'
import { $axios } from "../config/axios"

const emit = defineEmits(['addBook']) // Определяем emit

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 300)

const fetchItems = async () => {
  try {
    const params = {
      _sort: filters.sortBy,
      title: filters.searchQuery
    }

    const { data } = await $axios.get(`/books`, { params })

    items.value = data.map(({ id, ...other }) => ({ ...other, id: parseInt(id) }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
})

watch(filters, fetchItems)

// Обработчик добавления книги
const handleAddBook = (book) => {
  console.log('Книга добавлена из главной страницы:', book)
  emit('addBook', book) // Теперь emit определен
}
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold mb-8">Все книги</h2>

    <div class="flex gap-4">
      <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
        <option value="title">По названию</option>
        <option value="date">По дате</option>
      </select>

      <div class="relative">
        <img class="absolute left-4 top-3" src="/search.svg" />
        <input
          @input="onChangeSearchInput"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </div>
  </div>

  <div class="mt-10">
    <CardList 
      :items="items" 
      @addBook="handleAddBook" 
    />
  </div>
</template>
