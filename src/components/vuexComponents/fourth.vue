<template>
	<div>
		<h1>actions属性的应用</h1>
		<div>
			count: {{ countVuex }}
		</div>
		<div>
			someState: {{ someStateVuex }}
		</div>
		<el-button type="primary" @click="actionA(payload)">增加</el-button>
	</div>
</template>
<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
		data() {
			return {
				payload: {
					type: "increment",
					amount: 200
				}
			};
		},
		computed: {
			...mapState({
				countVuex: 'count',
				someStateVuex: 'someState'
			})
		},
		mounted() {},
		methods: {
//			increment() {//// 以载荷形式分发
//				this.$store.dispatch("increment",this.payload);
//			},
			...mapActions({
				add: 'increment', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
				actionA: 'actionA',
				actionB: 'actionB'
			})
		}
	};
</script>