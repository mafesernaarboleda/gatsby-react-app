import React from "react"
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import TuneIcon from '@material-ui/icons/Tune'
import SortIcon from '@material-ui/icons/Sort'
import Layout from '../components/layout'
import Item from '../components/item'
import Button from '@material-ui/core/Button';

import './index.css'

export default () => (
    <Layout>
        <div className="subheader">
             <div><Button><SortIcon/></Button></div>
             <div><Button>Add item</Button></div>
             <div><Button><TuneIcon/></Button></div>
        </div>
        <List>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </List> 
    </Layout>
);