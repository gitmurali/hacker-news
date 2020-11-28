import React, { Component } from 'react'

import ApexCharts from 'apexcharts'

class TimelineChart extends Component {
  constructor (props) {
    super(props)
    this.chart = null
    this.options = {
      series: [
        {
          name: 'votes',
          data: this.props.hits.map(feed => feed.points)
        }
      ],
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
        categories: this.props.hits.map(feed => feed.objectID)
      }
    }
  }

  componentDidMount () {
    this.chart = new ApexCharts(document.querySelector('#chart'), this.options)
    this.chart.render()
  }

  componentDidUpdate (prevProps, prevState) {
    const { vote, hits } = this.props
    if (prevProps.vote !== vote) {
      if (this.chart) {
        const mappedHits = hits.map(feed => {
          if (vote.id === feed.objectID) {
            return Object.assign(feed, { points: vote.upvote })
          }
          return feed
        })
        this.chart.updateSeries([
          {
            name: 'votes',
            data: mappedHits.map(feed => feed.points)
          }
        ])
      }
    }
    if (prevProps.hits !== this.props.hits) {
      this.chart.updateSeries([
        {
          name: 'votes',
          data: this.props.hits.map(feed => feed.points)
        }
      ])
    }
  }

  render () {
    return <div id='chart' />
  }
}

export default TimelineChart
