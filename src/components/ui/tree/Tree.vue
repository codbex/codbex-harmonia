<script setup lang="ts">
import { ref } from 'vue'
import { Folder, FolderOpen, Squircle } from 'lucide-vue-next'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
}

const props = defineProps<{
  nodes: TreeNode[]
  class?: string
}>()

const toggleNode = (node: TreeNode, state: Record<string, boolean>) => {
  state[node.id] = !state[node.id]
}
</script>

<template>
  <ul :class="['space-y-2', props.class]">
    <li v-for="node in props.nodes" :key="node.id">
      <div class="flex items-center">
        <button
          v-if="node.children"
          class="mr-2 focus:outline-none focus:ring"
          @click="toggleNode(node, openState)"
        >
          <span v-if="!openState[node.id]">
            <Folder/>
          </span>
          <span v-if="openState[node.id]">
            <FolderOpen/>
          </span>
        </button>
        <button
          v-if="!node.children"
          class="mr-2 focus:outline-none focus:ring"
        >
          <span>
            <Squircle/>
          </span>
        </button>
        <span>{{ node.label }}</span>
      </div>
      <Tree v-if="node.children && openState[node.id]" :nodes="node.children" class="ml-4" />
    </li>
  </ul>
</template>

<script lang="ts">
const openState = ref<Record<string, boolean>>({})
</script>
