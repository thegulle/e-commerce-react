import { Component } from "react"
import { Box, Typography } from "@mui/material"

export default class EmptyContent extends Component {
  render() {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}>
        <Typography variant="h1" color={'text.lightgrey'}>
          <i className="ph-archive"></i>
        </Typography>
        <Typography component="span"> Empty Content </Typography>
      </Box>
    )
  }
}
