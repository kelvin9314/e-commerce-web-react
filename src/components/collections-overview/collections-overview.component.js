import React from 'react'
import { useSelector } from 'react-redux'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './collections-overview.scss'

const CollectionsOverview = () => {
  // covert hash table object to array
  const collectionsArr = useSelector((state) =>
    Object.keys(state.shop.collections).map((key) => state.shop.collections[key])
  )

  return (
    <div className="collections-overview">
      {collectionsArr.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
