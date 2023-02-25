import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';

export default function PokemonCard(props) {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`

    const typeHandler = () => {
        if (props.types[1]) {
            return props.types[0].type.name + " | " + props.types[1].type.name
        } else {
            return props.types[0].type.name
        }
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 250 }}
                    image={imgUrl}
                    title={props.name}
                />

                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="div">
                            {typeHandler()}
                        </Typography>

                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}