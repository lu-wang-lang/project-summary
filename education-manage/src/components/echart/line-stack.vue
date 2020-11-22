<template>
  <div ref="chart"
       class="echart-container"></div>
</template>

<script>
export default {
  name: 'LineStack',
  props: {
    yAxisName: {
      type: String,
      default: ''
    },
    xAxis: {
      type: Array,
      default () {
        return []
      }
    },
    legend: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
  },
  methods: {
    init () {
      let _this = this
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        myChart.setOption({
          title: {
            text: ''
          },
          color: ['#38A28A', 'rgb(244, 66, 53)'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: _this.legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: _this.xAxis
          },
          yAxis: {
            type: 'value',
            name: _this.yAxisName,
            nameTextStyle: {
              fontWeight: 700,
              fontSize: 16
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: _this.data
        })
        window.addEventListener("resize", function () {
          myChart.resize()
        })
      }
      this.$on('hook:destroyed', () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      })
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    'data.data': {
      handler (newVal, oldVal) {
        this.init()
      },
      deep: true
    },
    'xAxis': {
      handler (newVal, oldVal) {
        this.init()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.echart-container {
  width: 100%;
  height: 100%;
}
</style>