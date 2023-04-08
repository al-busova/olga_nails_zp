import { GalleryItem } from "../GalleryItem/GalleryItem";
import { arrPhoto } from "../../utils/photos";
import { Box, Container, Grid } from "@mui/material";

export const GalleryList: React.FC = () => {
  const photos = arrPhoto();
  return (
    <Box component="section" sx={{ pt: 4, pb: 4 }}>
      <Container>
        {photos.length > 0 && (
          <Grid container spacing={2} sx={{ mr: "auto", ml: "auto" }}>
            {photos.map((item) => (
              <Grid item key={item.id}>
                <GalleryItem
                  photo={item.photo}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};
