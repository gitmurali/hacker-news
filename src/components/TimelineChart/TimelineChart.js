import React, { useEffect, useState } from 'react'

import ApexCharts from 'apexcharts'

const TimelineChart = ({ hits }) => {
  let chart
  let options = {
    series: [{
      name: 'Desktops',
      data: hits.map(feed => feed.points)
    }],
    chart: {
      height: 350,
      type: 'line',
      redrawOnWindowResize: true,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Votes',
      align: 'top'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: hits.map(feed => feed.objectID)
    }
  }

  useEffect(() => {
    chart = new ApexCharts(document.querySelector('#chart'), options)
    chart.render()
  }, [])

  useState(() => {
    // console.log(hits.length, options, 'candy')
    if (chart) chart.updateOptions(options)
  }, [hits.length])

  return (<div id="chart" />)
}

export default TimelineChart
