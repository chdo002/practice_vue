<template id="cell">

	<div class="cellBack"  v-on:click="clickfunction">
		<img id="thum" src="../assets/123.png" alt="../assets/123.png">
		<div id="detail">
			<p id="name">开始</p>
			<p id="subtitle">结束1231231231233123</p>
			<p>{{somdata}}</p>
		</div>
	</div>

</template>

<script>

export default {
  props: ['listDat'],
  data () {
    return {
      somdata: this.listDat
    }
  },
  methods: {
    clickfunction: function () {
      alert(123)
    }
  }
}

</script>
<style type="text/css">
	.cellBack{
		background-color: grey;
		width: 100%;
		height: 200px;
	}
	/*头像*/
	#thum{
		position: relative;
		display: block;
		float: left;
		width: 200px;
		height: 200px;
	}
	/*右边的详情*/
	#detail{
		background-color: red;
	}
	#name{
		margin: 0px;
		padding: 0px;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	#subtitle{
		margin: 0px;
		padding: 0px;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
</style>
