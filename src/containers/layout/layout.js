import React from 'react'
import PropTypes from "prop-types"
import {ThemeProvider} from 'styled-components';
import theme from '../../theme'
import {GlobalCSS} from '../../assets/css/style'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/fonts.css'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <GlobalCSS/>
                {children}
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
  
export default Layout