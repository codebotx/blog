import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import showcase from '../assets/img/showcase.svg';
import react from '../assets/img/react.svg';
import fundamentals from '../assets/img/fundamentals.svg';

export default function Blog() {
	return (
		<div>
						<div style={{ alignItems: 'center' }}>
				<div className="row justify-content-center" >
					<div className="col-auto py-5 ">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image= {showcase}	
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions  style={{ textAlign: "center"}}>
								<Button size="small">Share</Button>
								<Button size="small" href="https://anubhavp.me/">Learn More</Button>
							</CardActions>
						</Card>
					</div>
					<div className="col-auto py-5">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image={react}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Share</Button>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>

					</div>
					<div className="col-auto py-5">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image={fundamentals}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Share</Button>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>

					</div>
					
				</div>
			</div>
			<div style={{ alignItems: 'center' }}>
				<div className="row justify-content-center" >
					<div className="col-auto py-5 ">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image= {showcase}	
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions  style={{ textAlign: "center"}}>
								<Button size="small">Share</Button>
								<Button size="small" href="https://anubhavp.me/">Learn More</Button>
							</CardActions>
						</Card>
					</div>
					<div className="col-auto py-5">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image={react}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Share</Button>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>

					</div>
					<div className="col-auto py-5">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								height="225"
								image={fundamentals}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over 6,000
									species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Share</Button>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>

					</div>
					
				</div>
			</div>
		</div>
	)
}