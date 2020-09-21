import React, {useContext} from 'react';

import {DirectoryMenuContainer} from './directory-style';
import MenuItem from '../menu-item/menu-item';
import DirectoryContext from '../../context/directory/directory-context';

const Directory =() => {
    const sections = useContext(DirectoryContext);
    return(
         <DirectoryMenuContainer>
            {sections.map(({id, ...otherSectionProps})=> {
                return <MenuItem 
                key={id} 
                {...otherSectionProps}
                />
            })}
         </DirectoryMenuContainer>
    )
}


export default Directory;