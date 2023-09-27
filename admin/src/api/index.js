import axios from 'axios'
import {ElMessage} from 'element-plus'
import {get} from 'lodash'

axios.defaults.baseURL = 'http://localhost:3003'

axios.interceptors.response.use(response => {
    if (get(response, 'data.code') === 200) {
        return response.data
    } else {
        console.log(response.data)
        ElMessage.error(get(response, 'data.message'))
    }
})

const qeuryUserInfo = params => axios.get('/login', {params})

export {
    qeuryUserInfo,
}