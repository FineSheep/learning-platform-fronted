<template>

    <div v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="10"
         style="background-color: white; padding: 20px"
    >
        <a-list item-layout="vertical" size="large" :data-source="data" >
            <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{ text }}
        </span>
                </template>
                <img
                        slot="extra"
                        width="272"
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.putTime">
                    <a slot="title">{{ item.title }}</a>
                    <a-avatar slot="avatar" :src="item.avatar"/>
                </a-list-item-meta>
                <div class="box">
                    {{ item.content }}
                </div>
            </a-list-item>
        </a-list>
        <div v-if="loading && !busy" class="demo-loading-container">
            <a-spin/>
        </div>

    </div>

</template>
<script>
    import reqwest from 'reqwest';
    import infiniteScroll from 'vue-infinite-scroll';

    const baseTitle = 'http://127.0.0.1:8080';
    let curPage = 1;
    let pageSize = 10;
    let total = 20;
    const fakeDataUrl = `${baseTitle}/information/getInfo?curPage=${curPage}&pageSize=${pageSize}`;
    export default {
        name: "ListCard",
        directives: {infiniteScroll},
        data() {
            return {
                data: [],
                actions: [
                    {type: 'star-o', text: '156'},
                    {type: 'like-o', text: '156'},
                    {type: 'message', text: '2'},
                ],
                loading: false,
                busy: false,
            };
        },
        destroyed() {
            console.log("?????????")

        },
        mounted() {
            console.log("?????????????????????")
            this.fetchData(res => {
                this.data = res.data.records;
                total = res.data.total;
            });
            console.log(this.data.length)

        },
        methods: {
            fetchData(callback) {
                reqwest({
                    url: fakeDataUrl,
                    type: 'json',
                    method: 'get',
                    contentType: 'application/json',
                    success: res => {
                        callback(res);
                    },
                });
            },
            loadMore() {
                console.log("??????")
                console.log(`?????????${curPage}???`)
                curPage++;
                console.log(`???????????????${curPage}???`)
                this.loading = true;
                if (this.data.length >= total) {
                    this.$message.warning("?????????????????????");
                    this.busy = true;
                    this.loading = false;
                    return;
                }
                this.fetchData(res => {
                    console.log(res)
                    this.data = this.data.concat(res.data.records);
                    this.loading = false;
                });
            }

        }
    };
</script>
<style scoped>
    .box {
        overflow: hidden; /* ?????????????????? */
        text-overflow: ellipsis; /* ??????????????????????????? */
        word-break: break-all; /* ??????????????????????????????????????? */
        display: -webkit-box; /* ???????????? */
        -webkit-box-orient: vertical; /* ???????????????????????????????????? */
        -webkit-line-clamp: 2; /* ??????????????? */
    }

    .demo-infinite-container {
        height: 100%;
        overflow-y: auto;
    }

</style>
