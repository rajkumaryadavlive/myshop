import React from 'react';
import reactDom from 'react-dom';
import WelcomePageContent from '../WelcomePageContent'
it('renders without crashing',()=>{
    const div =document.createElement('div');
    reactDom.render(<WelcomePageContent />,div);
    reactDom.unmountComponentAtNode(div);
});