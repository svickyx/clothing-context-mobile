import React, {useContext} from 'react';

import CollectionsContext from '../../context/collections/collections-context';

import ItemCollection from '../../components/item-collection/item-collection';

import '../collection-page/collection-page.scss';


const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext);
    console.log(match,collections)
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
  
    return ( 
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <ItemCollection key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };


export default CollectionPage;