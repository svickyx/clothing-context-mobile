import React, {useContext} from 'react';

import CollectionsContext from '../../context/collections/collections-context';

import CollectionPreview from '../collection-preview/collection-preview';

import {CollectionsOverviewContainer} from './collection-overview-style';

const CollectionOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(
        key => collectionsMap[key]
    );
    return(
        <CollectionsOverviewContainer>
            {collections.map(({id, ...otherCollectionProps})=> (
                <CollectionPreview 
                key={id}
                {...otherCollectionProps}
                />
            ))}
        </CollectionsOverviewContainer>
    )
}


export default CollectionOverview;

//這裡做的一個更動是把collectionsMap本來是個object,但是array可以用map, object不能用map feature, 
//所以用Object.keys(oldobject) 可以把object的property轉換成array, 每一個value 是之前的property。