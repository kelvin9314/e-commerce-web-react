import React, { useState } from 'react'

import collectionsFaker from '../../fakers/collections-faker'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = (props) => {
  const [collections, setCollections] = useState(collectionsFaker)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
