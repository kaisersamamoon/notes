<template>
  <div>
    <h3>我是profile</h3>
    <div>
      <h5>参数id:{{$route.query.id}}</h5>
      <h5>参数：message{{$route.query.mesage}}</h5>

    </div>
  </div>
</template>
<script>
export default {
  name:'Profile',

}
</script>