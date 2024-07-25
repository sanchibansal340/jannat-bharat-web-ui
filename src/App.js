import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import { HomePage } from './pages/utils'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1d4d54',
        },
        secondary: {
            main: '#3B90A0',
        },
        background: {
            main: '#F8F4F1',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h2: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h3: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h4: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h5: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h6: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <HomePage />
            </div>
        </ThemeProvider>
    )
}

export default App
