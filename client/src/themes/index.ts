import { createMuiTheme, Theme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    chart: Palette['primary'][]
  }
  interface PaletteOptions {
    chart: PaletteOptions['primary'][]
  }
}

const determineTheme = (prefersDarkMode: boolean): Theme => {
  return createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      chart: [
        // primary
        { main: '#2C82BE' },
        { main: '#B8DCF5' },
        { main: '#76DDF8' },
        { main: '#53A8E2' },
        { main: '#F05D5E' },
        { main: '#FFCF00' },
        { main: '#87D68D' },
        { main: '#04E762' },
        { main: '#3E885B' },
        { main: '#F194B4' },
        // secondary
        { main: '#0A2239' },
        { main: '#7C2E86' },
        { main: '#3772FF' },
        { main: '#F038FF' },
        { main: '#EF709D' },
        { main: '#E2EF70' },
        { main: '#70E4EF' },
      ],
    },
  })
}

const getChartColors = (theme: Theme) => {
  return theme.palette.chart.map(({ main }) => main)
}

export { determineTheme, getChartColors }
