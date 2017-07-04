<template ref="profile">
  <div id="app" ref="profile">
    <ul>
      <li v-for="item in msg">
        <cell listDat='asdf'></cell>
      </li>
    </ul>
  </div>
</template>

<script>
import cell from '@/components/cell'

var tempList = [
  {
    name: 'heheda',
    dscr: 'momoda'
  },
  {
    name: 'heheda2',
    dscr: 'momoda2'
  }
]
export default {
  name: 'app',
  _uid: 123,
  data () {
    return {
      msg: tempList
    }
  },
  methods: {
    subfunc: function (newvalue) {
      this.msg = newvalue
    }
  },
  components: {
    cell
  }
}
</script>
