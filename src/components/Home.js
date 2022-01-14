import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
/* import CardMedia from '@mui/material/CardMedia'; */
import Typography from '@mui/material/Typography';
import { Alert, Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [error, setError] = useState('');
  const {currentUser,logout} = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Server Error')
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {error&&<Alert severity="error">{error}</Alert>}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon/>
        </Avatar>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Email
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentUser.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" onClick={handleLogout} size="small" color="primary" endIcon={<LogoutIcon/>}>
          LogOut
        </Button>
      </CardActions>
    </Card>
  );
}
