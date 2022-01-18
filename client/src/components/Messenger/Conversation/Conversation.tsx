import { useEffect, useState } from "react"
import { Box, Avatar, Typography } from "@mui/material"
import { Conversation as UserConversation } from "../../../interface/conversations";
import { useAppSelector } from "../../../store/hooks"
import { getRecipient } from "../../../helpers/APICalls/conversations";
import { AuthApiData, AuthApiDataSuccess } from "../../../interface/AuthApiData";
import { User } from "../../../interface/User";
import * as classes from "./useStyles";

interface Props {
  conversation: UserConversation
  onClickUser: (otherUser?: {_id: string; name: string; profilePhoto: string}) => void;
}

const Conversation: React.FC<Props> = ({conversation, onClickUser}) => {
    const loggedInUser = useAppSelector(state => state.users)
    const otherUserId = conversation.members.find(c => c !== loggedInUser._id )
    const [otherUser, setOtherUser] = useState<{_id: string; name: string; profilePhoto: string}>()
    
    useEffect(() => {
        getRecipient(otherUserId).then(data => {          
                setOtherUser(data)
        }).catch(error => {
            console.log(error)
        })
        return () => {
            setOtherUser(undefined)
        }
    }, [otherUserId, conversation])


    return (
      <Box onClick={(e) => onClickUser(otherUser)} sx={classes.mainWrapper}>
        <Box sx={classes.avatarWrapper}>
          <Box sx={classes.avatar} component={Avatar} src={otherUser?.profilePhoto}  />
          <Box sx={classes.active} component={Avatar} />
        </Box>
        <Box sx={classes.username} variant="h6" component={Typography}>
          {otherUser?.name}
        </Box>
      </Box>
    );
}

export default Conversation
