import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCollection } from "../utils/appSlice";
import useFakeStoreApi from "../hooks/useFakeStoreApi";
import Item from "./Item";
const Collection = () => {
  const dispatch = useDispatch();
  const products = useFakeStoreApi();

  useEffect(() => {
    if (products) {
      dispatch(setCollection(products));
    }
  }, [dispatch, products]);
  if (!products) return null;
  return (
    <div className="w-full flex flex-wrap border-2 justify-center py-10 ">
      {products.map((data) => (
        <Item key={data.id} productInfo={data} />
      ))}
    </div>
  );
};

export default Collection;