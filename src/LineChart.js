import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: this.gradient,
                    data: [10, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        }, { responsive: true, maintainAspectRatio: false })
        console.log("Chart data: ", this.chartdata)

        //this.renderChart(this.chartdata, { responsive: true, maintainAspectRatio: false })

    }
}