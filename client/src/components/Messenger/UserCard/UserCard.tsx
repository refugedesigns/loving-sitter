import { Box, Avatar, Typography } from "@mui/material"
import { CircleRounded } from "@mui/icons-material"

interface Props {
  profilePhoto: string;
  username: string;
  latestMessage: string;
  time: string;
}

const UserCard: React.FC<Props> = ({profilePhoto, username, latestMessage, time}) => {
  return (
    <Box>
      <Box>
      <Box component={Avatar} src={profilePhoto} />
      <Box component={CircleRounded} />
      </Box>
      <Box>
        <Box component={Typography}>{username}</Box>
        <Box component={Typography}>{latestMessage}</Box>
      </Box>
      <Box component={Typography}>{time}</Box>
    </Box>
  )
}

export default UserCard
