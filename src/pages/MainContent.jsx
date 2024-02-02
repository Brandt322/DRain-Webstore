import CardProducts from "../components/Card";
import Box from "@mui/material/Box";
export default function MainContent() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 2,
        padding: 4,
      }}
    >
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <CardProducts />
    </Box>
  );
}
