<template>
    <el-card>
        <div class="flex full">
            <div class="item flex vertical">
                <el-statistic :value="7">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            通讯录
                            <el-tooltip
                                effect="dark"
                                content="通讯录总数"
                                placement="top"
                            >
                                <el-icon style="margin-left: 4px" :size="12">
                                <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                </el-statistic> 
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>相比上个月</span>
                        <span class="green">
                        10%
                        <el-icon>
                            <CaretTop />
                        </el-icon>
                        </span>
                    </div>
                </div>
            </div>
            <div class="item flex vertical">
                <el-statistic :value="120">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            联系人
                            <el-tooltip
                                effect="dark"
                                content="联系人总数"
                                placement="top"
                            >
                                <el-icon style="margin-left: 4px" :size="12">
                                <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                </el-statistic> 
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>相比上个月</span>
                        <span class="green">
                        10%
                        <el-icon>
                            <CaretTop />
                        </el-icon>
                        </span>
                    </div>
                </div>
            </div>
            <div class="item flex vertical">
                <el-statistic :value="3">
                    <template #title>
                        <div style="display: inline-flex; align-items: center">
                            特别关心
                            <el-tooltip
                                effect="dark"
                                content="特别关心的联系人总数"
                                placement="top"
                            >
                                <el-icon style="margin-left: 4px" :size="12">
                                <Warning />
                                </el-icon>
                            </el-tooltip>
                        </div>
                    </template>
                </el-statistic> 
                <div class="statistic-footer">
                    <div class="footer-item">
                        <span>相比上个月</span>
                        <span class="green">
                        1
                        <el-icon>
                            <CaretTop />
                        </el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </el-card>

    <el-card class="charts-card">
        联系人数量变化
        <div
            ref="myChart"
            id="myChart"
            :style="{ width: '800px', height: '400px' }"
        ></div>
    </el-card>
</template>

<script setup>
import {getCurrentInstance, onMounted} from 'vue'

let internalInstance = getCurrentInstance()
let echarts = internalInstance.appContext.config.globalProperties.$echarts

onMounted(() => {
    const dom = document.getElementById('myChart')
    const myChart = echarts.init(dom)

    const option = {
        xAxis: {
            type: 'category',
            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [30, 51, 42, 80, 64, 88, 100],
                type: 'line',
                smooth: true
            }
        ]
    }

    myChart.setOption(option)
})
</script>

<style lang="scss">
.charts-card {
    margin-top: 20px;
}
.green {
    color: var(--el-color-success);
}
.red {
    color: var(--el-color-error);
}

.statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statistic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 10px;
}

.item {
    margin-right: 100px;
}
</style>