<template>
  <le-charts :options="options"></le-charts>
</template>

<script>
import LeCharts from '@/components/Charts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

const xAxisData = []
const data = []
const data2 = []
for (let i = 0; i < 50; i++) {
  xAxisData.push(i)
  data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
  data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
}
function getOptions() {
  return {
    backgroundColor: '#08263a',
    grid: {
      left: '5%',
      right: '5%'
    },
    xAxis: [
      {
        show: false,
        data: xAxisData
      },
      {
        show: false,
        data: xAxisData
      }
    ],
    visualMap: {
      show: false,
      min: 0,
      max: 50,
      dimension: 0,
      inRange: {
        color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
      }
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#4a657a'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#08263f'
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'back',
        type: 'bar',
        data: data2,
        z: 1,
        itemStyle: {
          normal: {
            opacity: 0.4,
            barBorderRadius: 5,
            shadowBlur: 3,
            shadowColor: '#111'
          }
        }
      },
      {
        name: 'Simulate Shadow',
        type: 'line',
        data,
        z: 2,
        showSymbol: false,
        animationDelay: 0,
        animationEasing: 'linear',
        animationDuration: 1200,
        lineStyle: {
          normal: {
            color: 'transparent'
          }
        },
        areaStyle: {
          normal: {
            color: '#08263a',
            shadowBlur: 50,
            shadowColor: '#000'
          }
        }
      },
      {
        name: 'front',
        type: 'bar',
        data,
        xAxisIndex: 1,
        z: 3,
        itemStyle: {
          normal: {
            barBorderRadius: 5
          }
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay(idx) {
      return idx * 20
    },
    animationDelayUpdate(idx) {
      return idx * 20
    }
  }
}

export default {
  components: {
    LeCharts
  },
  data() {
    return {
      options: getOptions()
    }
  }
}
</script>

<style lang="scss" scoped></style>
