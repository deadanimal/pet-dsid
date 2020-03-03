import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-instruction-detail',
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.scss']
})
export class InstructionDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  public chart: am4charts.GaugeChart
  public chart1: am4charts.SlicedChart

  oneAtATime = true

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

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
    let chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.innerRadius = -15;

    let axis = chart.xAxes.push(new am4charts.ValueAxis() as any);
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;

    let colorSet = new am4core.ColorSet();

    let gradient = new am4core.LinearGradient();
    gradient.stops.push({ color: am4core.color("red") })
    gradient.stops.push({ color: am4core.color("yellow") })
    gradient.stops.push({ color: am4core.color("green") })

    axis.renderer.line.stroke = gradient;
    axis.renderer.line.strokeWidth = 15;
    axis.renderer.line.strokeOpacity = 1;

    axis.renderer.grid.template.disabled = true;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.radius = am4core.percent(97);

    setInterval(function () {
      hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
    }, 2000);

    this.chart = chart
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.SlicedChart);
    chart.data = [{
      "name": "Stage #1",
      "value": 600
    }, {
      "name": "Stage #2",
      "value": 300
    }, {
      "name": "Stage #3",
      "value": 200
    }, {
      "name": "Stage #4",
      "value": 180
    }, {
      "name": "Stage #5",
      "value": 50
    }, {
      "name": "Stage #6",
      "value": 20
    }, {
      "name": "Stage #7",
      "value": 10
    }];

    let series = chart.series.push(new am4charts.FunnelSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.brightnesses = [-0.5, 1, -0.5];
    fillModifier.offsets = [0, 0.5, 1];
    series.slices.template.fillModifier = fillModifier;
    series.alignLabels = true;

    // series.labels.template.text = "{category}: [bold]{value}[/]";
  }

}
