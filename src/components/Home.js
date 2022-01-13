import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
/* import CardMedia from '@mui/material/CardMedia'; */
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Home() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <AccountCircleIcon/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Email
          </Typography>
          <Typography variant="body2" color="text.secondary">
            john.apco.dev@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary" endIcon={<LogoutIcon/>}>
          LogOut
        </Button>
      </CardActions>
    </Card>
  );
}
