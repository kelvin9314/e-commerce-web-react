import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

// using match makes it more flexible if we want to reuse it in another place
const ShopPage = ({ match }) => {
  const { isFetching } = useSelector((state) => state.shop)
  const isCollectionLoaded = useSelector((state) => !!state.shop.collections)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCollectionsStartAsync())
  }, [])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />}
      />
      {/*  NOTE nested Route */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
      />
    </div>
  )
}

export default ShopPage
