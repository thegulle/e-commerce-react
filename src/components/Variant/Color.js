import { Box, Tooltip } from "@mui/material"

export default function Color({ color }) {
  const colorName = 'product.' + color.toLowerCase().replace(' ', '_');
  return (
    <Tooltip title={color} placement="top">
      <Box sx={{ bgcolor: colorName, p: 1, width: 20, height: 20, borderRadius: '50%' }} />
    </Tooltip>
  )
}
