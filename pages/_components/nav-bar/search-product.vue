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
  <Select>
    <SelectTrigger class="w-[120px]">
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
   <Input type="search" placeholder="Search for products" />
    <Button class="bg-primary/80 hover:bg-primary/90"><Icon name="tabler:search"/></Button>
</template>