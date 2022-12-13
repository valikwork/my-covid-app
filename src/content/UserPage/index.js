import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";

export default function UserPage() {
  const dispatch = useDispatch();
  const currentUserInfo = useSelector((state) => state.user.userInfo);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("covidapp-userID")) {
      dispatch(getUserInfo());
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentUserInfo) setUserInfo(currentUserInfo);
  }, [currentUserInfo]);

  if (!userInfo) return <div>No Data was found</div>;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
							component="img"
							height="140"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="green iguana"
						/> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo.firstName} {userInfo.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userInfo.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email verified: {userInfo.email_verified ? "Yes" : "No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
