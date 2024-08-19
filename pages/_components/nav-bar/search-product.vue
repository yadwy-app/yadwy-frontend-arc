<script lang="ts" setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
  import { Button } from '@/components/ui/button'
  const SearchOptions = [{label: "One", value: "one"}, {label: "Two", value: "two"}]
</script>

<template>
  <section class="gap-x-2 flex">
    <div class="flex">
    <Select>
      <SelectTrigger class="w-[120px] rounded-e-none">
        <SelectValue placeholder="Search" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="option in SearchOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
       <Input type="search" placeholder="Search for artworks, plants..." class="rounded-s-none border-s-0" />
    </div >
      <Button class="bg-yadwy-green-500 hover:bg-yadwy-green-600"><Icon name="tabler:search" class="bg-white font-bold "/></Button>
  </section>
</template>