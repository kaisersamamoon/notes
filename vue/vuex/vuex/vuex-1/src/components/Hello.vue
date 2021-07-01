<template>
  <div>
    <h3>Hello组件</h3>
    <h3>{{$store.state.counter}}</h3>
    <h3>{{$store.state.message}}</h3>
    <h3>{{$store.getters.getGreaterAgesCount}}</h3>
    
  </div>
</template>
<script>
export default {
  name:"Hello"
}
</script>