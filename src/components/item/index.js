import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import StoreIcon from '@material-ui/icons/Store';
import './index.css';

export default () => (
       <ListItem alignItems="flex-start" className="item">
            <img className="image" src="https://img.romwe.com/images/romwe.com/201704/1492477957157309454_thumbnail_800x.jpg"/>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
        <Badge badgeContent={4} color="secondary" className="badge">
          <StoreIcon />
        </Badge>
      </ListItem>
  )