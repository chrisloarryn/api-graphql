import { Card, CardActionArea, CardProps } from '@mui/material';

type BaseCardProps = React.PropsWithChildren<
	CardProps & {
		href?: string;
	}
>;

function BaseCard({ href, children, ...rest }: BaseCardProps) {
	return (
		<Card square elevation={0} {...rest}>
			{href ? (
				<CardActionArea href={href}>
					{children}
				</CardActionArea>
			) : (
				children
			)}
		</Card>
	);
}

export default BaseCard;