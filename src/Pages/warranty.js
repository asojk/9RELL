import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WarrantyGrid() {
	const itemData = [
		{
			img: 'https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-1.png',
			href: 'https://specs.duro-last.com/#warranty',
			title: 'Warranty Information',
			description: 'Click above to see a list of all warranties Duro-Last offers and a sample of each.',
		},
		{
			img: 'https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-3.png',
			href: '/media/marketing/literature/Protecting_Your_Investment_Booklet.pdf',
			title: 'Protect Your Roof',
			description: 'The best way to ensure a long-lasting, watertight roof is to protect your investment with routine housekeeping and inspection. A simple and basic roof maintenance program will help protect your investment by eliminating costly repairs, as well as, potential damages to your building.',
			description2: 'Click <a href="/media/marketing/literature/Protecting_Your_Investment_Booklet.pdf">here</a> to learn more tips for setting up a general maintenance program.',
		},
		{
			img: 'https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-2.png',
			href: '/media/marketing/literature/maintenance_checklist.pdf',
			title: 'Inspection',
			description: 'Upon completion of a commercial job, a Duro-Last Quality Assurance Technical Representative will inspect the Duro-Last Roofing System. This means that between the inspections in our manufacturing plant and on the roof, you can be confident that we stand behind our products.',
			description2: 'Click <a href="/media/marketing/literature/maintenance_checklist.pdf">here</a> to access the Owners Maintenance Checklist and learn what you can do to help protect your Duro-Last Roofing System.',
		},
	];


	return (
		<div className="section-container">
			<Grid container spacing={2}>
				{itemData.map((item, index) => (
					<Grid item xs={4} md={4} key={index}>
						<Card>
							<CardMedia
								component="img"
								height="20%"
								image={item.img}
								alt="warranties"
							/>
							<CardContent>
								<Typography variant="h5" component="div">
									<a href={item.href}>{item.title}</a>
								</Typography>
								<Typography variant="body2" color="text.secondary">
									<p className="exp-text">{item.description}</p>
									<p className="exp-text">{item.description2}</p>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
