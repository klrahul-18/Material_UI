import React from "react";
import { Button, Container, Box, Stack, Link } from "@mui/material";
// import * as rk from '@mui/material';
import btncss from "./Navbar.css";
import { red } from "@mui/material/colors";
import menu from "../../JSON-API/Menu.json";

function Navbar() {
  function Buttons({ item }) {
    //console.log(item);
    return (
      <Button
        sx={{
          background: "orange",
          color: "#fff",
        }}
      >
        {item.label}
      </Button>
    );
  }
  return (
    <>
      <Container>
        <Button variant="contained" sx={btncss}>
          Testing
        </Button>
        <Stack direction="row" spacing={2} mt={1}>
          <Box
            sx={{
              width: 200,
              height: 200,
              mt: 1,
              backgroundImage:
                'url("https://p1.pxfuel.com/preview/92/885/103/rose-petal-flowers-beautiful-pretty-flowers-nature-royalty-free-thumbnail.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "cover",
            }}
          ></Box>
          <Box
            sx={{
              width: 200,
              height: 200,
              background: red["500"],
              mt: 1,
              color: "white",
            }}
          >
            This is Box
          </Box>
        </Stack>
      </Container>

      {/* {<rk.Button variant="contained">Universal</rk.Button>} */}
      <Box sx={{ background: "#161638", color: "#fff", my: 2, py: 1 }}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <h1>Momondo</h1>
            </Box>
            <Stack
              direction={{
                md: "row",
              }}
              spacing={1}
            >
              {menu.map((item, index) => {
                return <Buttons item={item} key={index} />;
              })}
            </Stack>
            <Stack direction={{ sm: "row" }} spacing={2}>
              <Link href="javascript:void" underline="none">
                English
              </Link>
              <Link href="javascript:void" underline="none">
                Log in
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
