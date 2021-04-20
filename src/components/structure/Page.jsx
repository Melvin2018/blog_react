import React from 'react';
import { useSelector } from 'react-redux'
import { Toolbar, Grid } from '@material-ui/core';
import TopScroll from '../scroll/ScrollTop'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Title from './Title'

const Page = (props) => {
    const header = useSelector(store => store.header.name)
    return (
        <>
            <div style={{ height: 400 }}>
                <Header />
                <Toolbar id="back-to-top" />
                <Title name={header} />
            </div>
            <Grid item xs={12}>
                <Content />
            </Grid>
            <TopScroll />
            <Footer />
        </>
    );
}
export default Page;