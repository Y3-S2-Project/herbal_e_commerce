import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import FlagIcon from '@mui/icons-material/Flag'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export default function ReviewCard(reviewDetails) {
  console.log('reviewDetails', reviewDetails)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleFlagInappropriate = () => {
    //TODO: Flag as inappropriate
    handleMenuClose()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: '1rem',
        borderRadius: '10px',
      }}
    >
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Avatar alt="Remy Sharp" src="../../../assets/images/landing-page/drugs-image.png" />
            </Grid>
            <Grid item xs={10}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {reviewDetails.reviewDetails.user.name.first_name +
                  ' ' +
                  reviewDetails.reviewDetails.user.name.last_name}
              </Typography>
              <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                {formatDate(reviewDetails.reviewDetails.updatedAt)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                aria-controls="card-menu"
                aria-haspopup
                onClick={handleMenuOpen}
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="card-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleFlagInappropriate}>
                  <FlagIcon sx={{ mr: 1 }} />
                  Flag as inappropriate
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Rating name="read-only" value={reviewDetails.reviewDetails.rating} readOnly />
            </Grid>
          </Grid>
          {/* <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Lorem ipsum dolor sit amet
              </Typography>
            </Grid>
          </Grid> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.primary" gutterBottom>
                {reviewDetails.reviewDetails.comment}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}
