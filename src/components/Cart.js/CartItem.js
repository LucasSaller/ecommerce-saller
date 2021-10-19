import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Button, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from "../ItemCount/ItemCount";
import producto from "../../assets/producto1.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

import "./Cart.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function CartItem() {
  return (
    <>
      <div className="cart__container">
        <h4 className="cart__title">Cart</h4>
        <Divider />
        <Grid container>
          <Grid item md={12} xs={12}>
            <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }} elevation={0}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={producto} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Nike air
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        asdads
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                  >
                    <Typography
                      variant="subtitle1"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      $19.00
                    </Typography>
                    <IconButton>
                      <DeleteIcon color="primary" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CartItem;
