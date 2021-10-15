import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles, withStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ItemDetail from "./ItemDetail/ItemDetail";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles({
  productImage: {
    objectFit: "contain",
  },
  buttons: {
    justifyContent: "space-around",
  },
});

function Item({ item }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const { name, price, poster } = item;

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <Card
        sx={{ maxWidth: { xs: 200, md: 300 }, margin: { xs: "0 auto", md: 0 } }}
        style={{
          margin: "0 auto",
          minHeight: 400,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "& :hover": {
            boxShadow:
              "box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          },
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
            <MoreHorizIcon color="primary" onClick={handleOpen} />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ItemDetail item={item} handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default Item;
