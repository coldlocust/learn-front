import { getCollectionList } from '@/api/screenDesign/componentCollection'

/* store(仓库)共享数据保存在state状态中
 *   在组件中，只能对来自store中state里的数据读取，不能手动改变
 *   改变state中的数据，只能通过显示的提交mutations
 */
const state = {
    collectionList: {
        list: [],
        total: 0
    }
}

/* action类似于mutation
 * 官方文档：https://vuex.vuejs.org/zh/guide/actions.html
 * action与mutation的不同之处：
 *  1.action提交的是mutation,而不是直接改变状态
 *  2.action可以包含任意异步操作
 * action函数接受一个与store实例具有相同方法和属性的contex对象，
 */
const actions = {
    async getCollectionList({ commit }, { param, param2 }) {
        const { code, data } = await getCollectionList(param, param2)
        if (code === 200) {
            /* 唤醒一个mutation handler
            *   通过相应的type(SET_COLLECTION_LIST)调用store.commit方法
            *   提交载荷（payload）-->向store.commit传入额外的参数，即mutation的载荷（payload）
            *       在绝大多数情况下载荷应该是一个对象-->可以包含多个字段，并且记录的mutation更加易读
            */
            commit('SET_COLLECTION_LIST', data)  //调用contex.commit提交一个mutation
            /* 对象风格的提交方式
             *  直接使用包含type属性的对象
             *  例如--> commit({type:SET_COLLECTION_LIST,a:1})
             *  整个对象作为载荷传给mutaion函数，保持handler不变
            */
        }
    }
}

/* 改变Vuex的store中的状态的唯一方法是提交mutations
 * 官方文档：https://vuex.vuejs.org/zh/guide/mutations.html
 *  每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler），
 *  这个回调函数是我们实际进行状态更改的地方，并且它会接受state作为第一个参数
 *  mutation补充：
 *       1.最好初始化好所用的所有属性
 *       2.mutation必须是同步函数
 */
const mutations = {
    /* 这是一个mutation实例
     *   type：SET_COLLECTION_LIST，接受state作为第一个参数
     */
    SET_COLLECTION_LIST(state, data) {
        //进行状态更改
        state.collectionList = data
    }
}

export default {
    namespaced: true,
    mutations,
    actions,
    state
}