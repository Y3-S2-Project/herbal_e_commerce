import React from 'react'
import Reviews from '../../../components/reviewCards/reviews'
import AddReviewCard from './addReview/addReview'
import Grid from '@mui/material/Grid'

export default function BuyerReviewView() {
  const reviewCategory = {
    reviewID: 'R018',
    user: {
      _id: '642d7b30adc38c896ac0a760',
    },
    product: {
      _id: '643e9f9a6c3952d93b979657',
    },
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddReviewCard reviewCategory={reviewCategory} />
        </Grid>
      </Grid>
      <Reviews reviewCategory={{ user: '642d7b30adc38c896ac0a760' }} />
    </>
  )
}
