import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/slices/campersSlice";
import CamperCard from "../components/CamperCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h2>Catalog</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading campers.</p>}
      {list.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CatalogPage;
