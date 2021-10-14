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
import "./Cart.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function Cart() {
  return (
    <>
      <div className="cart__container">
        <Grid container>
          <Grid item md={8}>
            <Grid container>
              <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }} elevation={5}>
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
          <Grid item md={4}>
            <h1>der</h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cart;
