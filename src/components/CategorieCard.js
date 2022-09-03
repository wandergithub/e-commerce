import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CategorieCard = (name, image) => {
  return(
    <Card>
      <CardMedia 
      component="img"
      height="140"
      image={image}
      alt="Items categorie"
      />
      <CardContent>
        <Typography variant="5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CategorieCard;
