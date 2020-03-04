import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  public chart: am4charts.XYChart
  public chart1: am4charts.XYChart

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initChart()
      this.initChart1()
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {

      if (this.chart) {
        this.chart.dispose();
      }
      
      if (this.chart1) {
        this.chart1.dispose()
      }
    })
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = generateChartData();

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12)

    // Add scrollbar
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 1000);
      let visits = 1200;
      for (var i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }

    this.chart = chart
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.SlicedChart);
    chart.data = [{
      "name": "20\" Casing",
      "value1": 600,
      "value2": 450
    }, {
      "name": "13-3/8\" Casing",
      "value1": 300,
      "value2": 400
    }, {
      "name": "Packet Depth",
      "value1": 200,
      "value2": 290
    }, {
      "name": "9-5/8\" Casing",
      "value1": 180,
      "value2": 100
    }, {
      "name": "Top of Carbonate",
      "value1": 50,
      "value2": 50
    }, {
      "name": "FTD",
      "value1": 20,
      "value2": 20
    }, {
      "name": "FTD (8-1/2\" Hole",
      "value1": 10,
      "value2": 10
    }];

    let series1 = chart.series.push(new am4charts.FunnelSeries());
    series1.dataFields.value = "value2";
    series1.dataFields.category = "name";
    series1.labels.template.disabled = true;
  }

}
