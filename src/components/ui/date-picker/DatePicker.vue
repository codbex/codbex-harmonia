<script setup lang="ts">
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { getLocalTimeZone, CalendarDate, today } from '@internationalized/date'
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-vue-next'

const props = defineProps<{
  modelValue: Date | null
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: Date | null): void
}>()

const isOpen = ref(false)

const present = today(getLocalTimeZone());
let presentDate = new CalendarDate(present.year, present.month, present.day);
const selectedDate = ref<Date | null>(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    selectedDate.value = newValue
  }
)

watch(selectedDate, (newValue) => {
  emit('update:modelValue', newValue)
})

const formattedDate = computed(() => {
  return selectedDate.value ? format(selectedDate.value, 'yyyy-MM-dd') : ''
})

const handleDateChange = (date: Date) => {
  selectedDate.value = date
  isOpen.value = false
}

const format = (date: Date | null, formatString: string) => {
  if (!date) return ''
  const padZero = (num: number) => (num < 10 ? `0${num}` : `${num}`)
  const replacements: Record<string, string> = {
    yyyy: date.getFullYear().toString(),
    MM: padZero(date.getMonth() + 1),
    dd: padZero(date.getDate()),
  }
  return formatString.replace(/yyyy|MM|dd/g, (match) => replacements[match])
}
</script>

<template>
  <div class="w-full max-w-sm">
    <Popover v-model:open="isOpen">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          :class="cn(
            'w-[280px] justify-start text-left font-normal',
            !formattedDate && 'text-muted-foreground',
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ formattedDate ? formattedDate : "Pick a date" }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="p-0 w-auto">
        <Calendar
          v-model="presentDate"
          :selected="selectedDate"
          @update:selected="handleDateChange"
          class="rounded-md border"
          @update:model-value="(v) => {
            if (v) {
              handleDateChange(v.toDate(getLocalTimeZone()));
            }
          }"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
