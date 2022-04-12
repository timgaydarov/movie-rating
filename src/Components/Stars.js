import React from 'react';
import Star from './Star.js';

function Stars(props) {

	return (
		<ul className="card-body-stars u-clearfix">
			<li>
				{props.count <= 0 || props.count > 5 || typeof props.count === 'string'
					? null
					: [...Array(props.count)].map((star, i) => <Star key={i}/>)
				}
			</li>
		</ul>
	);
}

export default Stars;

