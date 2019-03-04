import * as React from 'react';
import styled from '@emotion/styled';

export interface LayoutProps {
	/** @name Direction @default vertical */
	direction?: LayoutDirection;

	/** @name Width @default 100% */
	width?: string;

	/** @name Maximum width*/
	maxWidth?: string;

	/** @name Background color@default transparent */
	backgroundColor?: string;
	center?: boolean;

	/** @name AlignItems */
	alignItems?: LayoutAlignItems;

	children?: React.ReactNode;
	className?: string;
}

export enum LayoutDirection {
	/** @name horizontal */ Horizontal,
	/** @name vertical */ Vertical
}

export enum LayoutAlignItems {
	FlexStart = 'flex-start',
	FlexEnd = 'flex-end',
	Center = 'center',
	Stretch = 'stretch',
	Baseline = 'baseline'
}

export const Layout =
	styled.div <
	LayoutProps >
	`
	display: ${props => (props.direction === LayoutDirection.Vertical ? 'block' : 'flex')};
	position: relative;
	margin: 0 ${props => (props.center && 'auto') || ''};
	width: ${props => props.width || 'auto'};
	max-width: ${props => props.maxWidth || 'none'};
	background-color: ${props => props.backgroundColor || 'none'};
	align-items: ${props => props.alignItems || 'none'};
`;