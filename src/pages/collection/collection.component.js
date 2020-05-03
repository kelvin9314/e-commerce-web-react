import React from 'react'
import { useSelector } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.scss'

const CollectionPage = ({ match }) => {
  const { collections } = useSelector((state) => state.shop)

  const selectCollectionFn = (collectionUrlParam) => collections[collectionUrlParam]

  const currentCollection = selectCollectionFn(match.params.collectionId)
  const { title, items } = currentCollection
  return (
    <div className="collection-page">
      <h2 className="title"> {title} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
