import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'burger',
					imageUrl:
						'https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 1,
					linkUrl: 'burgers'
				},
				{
					title: 'pizza',
					imageUrl:
						'https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 2,
					linkUrl: ''
				},
				{
					title: 'sandwich',
					imageUrl:
						'https://images.pexels.com/photos/1893572/pexels-photo-1893572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 3,
					linkUrl: ''
				},
				{
					title: 'pasta',
					imageUrl:
						'https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 4,
					linkUrl: ''
				},
				{
					title: 'salad',
					imageUrl:
						'https://images.pexels.com/photos/1833333/pexels-photo-1833333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 5,
					size: '',
					linkUrl: ''
				},
				{
					title: 'soup',
					imageUrl:
						'https://images.pexels.com/photos/4212450/pexels-photo-4212450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					id: 6,
					size: '',
					linkUrl: ''
				}
			]
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
