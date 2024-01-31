import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCollection } from "../utils/appSlice";
import useFakeStoreApi from "../hooks/useFakeStoreApi";
import Item from "./Item";
import CollectionShimmer from "./shimmer/CollectionShimmer";

const Collection = () => {
  const dispatch = useDispatch();
  const { products } = useFakeStoreApi();

  useEffect(() => {
    if (products) {
      dispatch(setCollection(products));
    }
  }, [dispatch, products]);
  if (!products) return <CollectionShimmer />;
  return (
    <div className="w-full flex flex-wrap  px-4 py:5  lg:px-0  justify-center lg:py-10 ">
      {products.map((data) => (
        <Item key={data.id} productInfo={data} />
      ))}
    </div>
  );
};

export default Collection;
