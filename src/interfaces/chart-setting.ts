
export interface ISeriesDataItem {
  name?: string,
  data?: [any, number][]
}

export interface IChartSetting {
  chart?: {
    type?: string
  },
  title?: {
    text?: string
  },
  credits?: {
    enabled?: boolean
  },
  series?: ISeriesDataItem[],
  xAxis?: {
    type?: string,
    dateTimeLabelFormats?: {
      day?: string
    },

    tickInterval?: number
  },
  yAxis?: {
      labels?: {
        style?: {
          color?: any
        }
      },
    gridLineWidth?:number,
    title?: {
        text?: string,
        style?: {
          color?: any
        }
      },
      opposite?: boolean,
      visible?: boolean

    }[]
}
