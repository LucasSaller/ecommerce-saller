import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import productImage from "../../assets/producto1.jpeg";
import Typography from "@mui/material/Typography";
import { makeStyles, withStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const useStyles = makeStyles({
  productImage: {
    objectFit: "contain",
  },
  buttons: {
    justifyContent: "space-around",
  },
});
function Product({ item }) {
  const classes = useStyles();
  const { name, price, poster, stock } = item;
  return (
    <div>
      <Card
        sx={{ maxWidth: { xs: 200, md: 300 }, margin: { xs: "0 auto", md: 0 } }}
        style={{
          margin: "0 auto",
          minHeight: 340,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          height="120"
          image={poster}
          alt="asd"
          className={classes.productImage}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttons}>
          <IconButton>
            <ShoppingBasketIcon color="primary" />
          </IconButton>
          <IconButton>
            <MoreHorizIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(useStyles)(Product);
