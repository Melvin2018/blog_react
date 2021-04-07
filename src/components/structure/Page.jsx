import React from 'react';
import { Toolbar, CssBaseline, Grid } from '@material-ui/core';

import TopScroll from '../scroll/ScrollTop'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
const Page = (props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Toolbar id="back-to-top" />
            <Grid item xs={12}>
                <Content />
            </Grid>
            <TopScroll />
        </>
    );
}
export default Page;