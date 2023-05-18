import React from 'react';

// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/system/Box';

//Components
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';

// This function renders main content of web app
function App() {
    const [currentPage, setCurrentPage] = React.useState('Landing');
    // may need callback function later
    const setCurrentPageCallback = React.useCallback(() => {
        setCurrentPage(page);
    }, [currentPage]);
    return (
        <>
            {/* FIXME : theming */}
            <ThemeProvider theme={theme}>
                <div
                    className='App'
                    style={{
                        // FIXME fix theme
                        backgroundColor: '#555',
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                    }}
                >
                    <Header
                        // setCurrentPageCallback={setCurrentPageCallback}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <main>
                        <Box>
                            <Landing
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <About currentPage={currentPage} />
                        </Box>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}
export default App;
