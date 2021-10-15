import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles, withStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import ItemCount from "../../ItemCount/ItemCount";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const useStyles = makeStyles({
  productImage: {
    objectFit: "contain",
  },
  buttons: {
    justifyContent: "space-around",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ItemDetail({ item, handleClose }) {
  const classes = useStyles();
  const { name, price, poster, stock, initial } = item;
  return (
    <Card sx={style}>
      <IconButton>
        <ArrowBackIcon color="primary" onClick={handleClose} />
      </IconButton>
      <CardMedia
        component="img"
        height="120"
        image={poster}
        alt="asd"
        className={classes.productImage}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Content
        </Typography>
        <Typography variant="body2" color="text.primary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <ItemCount stock={stock} initial={initial} />
      </CardActions>
    </Card>
  );
}

export default ItemDetail;
