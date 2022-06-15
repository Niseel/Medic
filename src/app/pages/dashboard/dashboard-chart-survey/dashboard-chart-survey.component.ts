import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartOptions, Plugin, registerables } from 'chart.js';

import { AppHelper } from './../../../shared/utilities/app.helper';

Chart.register(...registerables);
@Component({
  selector: 'app-dashboard-chart-survey',
  templateUrl: './dashboard-chart-survey.component.html',
  styleUrls: [
    '../../../../assets/styles/components/dashboard-page/dashboard-chart-survey.scss',
  ],
})
export class DashboardChartSurveyComponent implements OnInit, AfterViewInit {
  private chartInstance?: Chart;

  public chartTitle = 'Conflict nè';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const me = this;
    me.initChart();
  }

  private createNodeLabel(color: string, labelName: string) {
    const divEl = document.createElement('div');
    divEl.className = 'chartLabel_tagsItem';

    const divEl_Icon = document.createElement('div');
    divEl_Icon.className = 'chartLabel_tagsItem--icon';
    divEl_Icon.style.backgroundColor = color;

    const divEl_Name = document.createElement('div');
    divEl_Name.className = 'chartLabel_tagsItem--name';

    // const span_name = document.createElement('span');
    divEl_Name.textContent = labelName;
    // divEl_Name.appendChild(span_name);

    divEl.appendChild(divEl_Icon);
    divEl.appendChild(divEl_Name);

    return divEl;
  }
  private createLegend(legendTitle: string, legendLable?: any[]) {
    const me = this;

    const chartTitle = document.querySelector('.chartLabel .chartLabel_name');
    const chartTags = document.querySelector('.chartLabel .chartLabel_tags');

    // const divEl = me.createNodeLabel();
    // chartTags?.appendChild(divEl);

    // console.log(legendLable);

    if (!!legendLable && legendLable.length >= 2) {
      for (let index = 0; index < legendLable.length; index++) {
        const divEl = me.createNodeLabel(
          legendLable[index].borderColor,
          legendLable[index].label
        );
        chartTags?.appendChild(divEl);
      }
    }

    chartTitle!.innerHTML = legendTitle;

    // chartTags!.innerHTML = 'hello';
  }

  public onToggle(value: number) {
    // console.log(this.chartInstance.legend.legendItems[value].hidden);
    const visubileData = this.chartInstance?.isDatasetVisible(value);
    return visubileData
      ? this.chartInstance?.hide(value)
      : this.chartInstance?.show(value);
  }

  private initChart(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartEl = document.getElementById('chartId') as HTMLCanvasElement;

      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');

        if (ctx) {
          const options: ChartOptions<any> = me.getConfigOptionsChart();
          // console.log(options);
          const data = me.getDataChart();
          // console.log(data);
          me.chartInstance = new Chart(ctx, {
            type: 'line',
            data,
            options,
          });

          me.createLegend(options.plugins.legend.title.text, data.datasets);
          clearInterval(interval);
        }
      }
    }, 10);
  }

  private updateDatasetsChart(): void {}

  private getDataChart() {
    const me = this;
    const datasets = me.getDatasetsChart();
    const labels = me.getLabelsChart();
    return {
      labels,
      datasets,
    };
  }

  private getGradientColor(
    canvasId: string,
    shadowLength: number,
    colorStops: string[]
  ) {
    const canvas = document.getElementById(
      canvasId
    ) as HTMLCanvasElement | null;

    const ctx = canvas!.getContext('2d');

    const gradient = ctx!.createLinearGradient(0, 0, 0, shadowLength);
    if (!!colorStops && colorStops.length >= 2) {
      for (let index = 0; index < colorStops.length; index++) {
        gradient.addColorStop(index, colorStops[index]);
      }
    }
    return gradient;
  }

  private getDatasetsChart() {
    const me = this;
    const gradient_purple = me.getGradientColor('chartId', 700, [
      'rgba(129,50,255,0.55)',
      'rgba(255,255,255,0.32)',
    ]);

    const gradient_blue = me.getGradientColor('chartId', 700, [
      'rgba(0,115,255,0.55)',
      'rgba(255,255,255,0.32)',
    ]);

    const fakeDatasets = [
      {
        label: 'New Patients ',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => AppHelper.createRandomData(0, 8000)),
        ],
        pointBackgroundColor: '#8146FF',
        borderColor: '#8146FF',
        pointBorderColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHoverRadius: 8,
        fill: true,
        backgroundColor: gradient_purple,
        tension: 0.5,
        borderWidth: 5,
      },
      {
        label: 'Old Patients',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => AppHelper.createRandomData(0, 8000)),
        ],
        pointBackgroundColor: '#0075FF',
        borderColor: '#0075FF',
        pointBorderColor: '#FFF',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHoverRadius: 8,
        fill: true,
        backgroundColor: gradient_blue,
        tension: 0.5,
        borderWidth: 5,
      },
    ];
    return fakeDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(12)
      .fill(0)
      .map((_, index: number) => {
        const monthName = new Date();
        monthName.setMonth(index);
        labels.push(
          monthName.toLocaleDateString('default', { month: 'short' })
        );
      });
    return labels;
  }

  private isFloat(n: any) {
    return Number(n) === n && n % 1 !== 0;
  }

  private toThousandUnit(value: any) {
    const me = this;
    const number = Math.abs(value);
    if (number > 999) {
      return me.isFloat(number / 1000)
        ? (number / 1000).toFixed(1) + 'k'
        : number / 1000 + 'k';
    } else {
      return number;
    }
  }

  private getConfigOptionsChart() {
    const me = this;
    const plugins = me.getConfigPluginsChart();
    return {
      responsive: true,
      maintainAspectRatio: false,
      onResize: function (x: any, y: any) {
        // console.log(x, y);
      },
      plugins,

      interaction: {
        mode: 'index',
        intersect: false,
        position: 'nearest',
      },

      scales: {
        x: {},
        y: {
          grid: {
            display: false,
          },
          ticks: {
            callback: function (val: any, index: any) {
              // console.log(val, index);
              return me.toThousandUnit(val);
            },
          },
        },
      },
    };
  }

  private getConfigPluginsChart() {
    return {
      tooltip: {
        yAlign: 'top',
        boxHeight: 25,
        padding: 12,
        displayColors: false,
        bodySpacing: 5,
        callbacks: {
          title: function (context: any) {
            // console.log(context[0].label);
            return '';
          },
        },
      },
      legend: {
        title: {
          display: true,
          text: 'Hospital Survey',
          align: 'start',
          position: 'right',
          font: {
            size: 30,
          },
        },
        display: true,
        labels: {
          font: {
            size: 12,
            family: "'Lato', 'Helvetica', 'Arial', sans-serif",
            weight: 500,
          },
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
    };
  }
}
