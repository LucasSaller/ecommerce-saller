import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from "../ItemCount/ItemCount";
import producto from "../../assets/producto1.jpeg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function Cart() {
  return (
    <>
      {/* <ItemCount initial={1} stock={22} /> */}
      {/* <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper> */}

      <Grid>
        <Grid container>
          <Grid item md={8}>
            <Grid container>
              <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img
                        alt="complex"
                        src="/static/images/grid/complex.jpg"
                      />
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
                          Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        $19.00
                      </Typography>
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
      </Grid>
    </>
  );
}

export default Cart;
