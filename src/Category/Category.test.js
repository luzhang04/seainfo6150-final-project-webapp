import React from 'react';
import { render } from '@testing-library/react';
import Category from './Category.jsx';
import { BrowserRouter } from "react-router-dom";

describe('Category tests', () => {
	it('renders correctly', () => {
		const { container } = render(<BrowserRouter><Category /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});