import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { IProperty } from './types/property.interface'

function App(): any {
  const [data, setData] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const seePrice = (price: string) => {
    alert(price)
  }

  const getProperties = () =>{ 
    try {
          fetch(`http://localhost:3001/api/properties`)
          .then((response) => response.json())
          .then((items) => setData(items.data))
          setLoading(false)
        } catch(e: any) {
          console.log(e)
          setLoading(false)
        }
  }

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img width={48} src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">PROPELR</h2>
      </header>

      <h3 className="App-subtitle">Property Listings Below</h3>
      <div>
      {loading && (
        <div className="App-loading"><p>Loading... </p></div>
      )}
      </div>
      <Box>
        <Grid container sx={{ mx: {xs: '0%', sm: '10%'}, width: {xs: '100%', sm: '80%'} }}>
          {data &&
            data.map((property: any, index: number) => (
              <Grid item key={index} sm={4} xs={12} sx={{padding: '5px'}}>


                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={property.img}
                    title={property.adddress}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        position: "relative",
                        display: "flex",
                        maxWidth: {xs: '100%', sm: '250px'},
                        minHeight: {xs: "80px", sm:"150px"},
                      }}
                    >
                      {property.address}
                      <br></br>
                      <br></br>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => seePrice(property.price)} size="small">See Price</Button>
                  </CardActions>
                </Card>


              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
