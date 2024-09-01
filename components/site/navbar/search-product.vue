<script lang="ts" setup>
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const SearchOptions = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
];
  defineProps({
    class: String
  })

</script>

<template>
  <section class="flex items-center space-x-2 w-full" :class="class">
    <div class="flex w-full">
      <Select>
        <SelectTrigger class="w-24 md:w-28  rounded-e-none">
          <SelectValue placeholder="Search"/>
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
      <Input
        type="search"
        placeholder="Search for artworks, plants..."
        class="rounded-s-none border-s-0 md:min-w-64 lg:min-w-80 flex-1"
      />
    </div>
    <Button class="bg-yadwy-green-500 hover:bg-yadwy-green-600"
      ><Icon name="tabler:search" class="font-bold bg-white"
    /></Button>
  </section>
</template>
