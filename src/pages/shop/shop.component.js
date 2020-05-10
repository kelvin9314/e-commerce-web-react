import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

// using match makes it more flexible if we want to reuse it in another place
const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // const [unsubscribeFromSnapshot, setUnsubscribeFromSnapshot] = useState(null)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(updateCollections(collectionsMap))
      setLoading(false)
    })
  }, [])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
      />
      {/*  NOTE nested Route */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  )
}

export default ShopPage
