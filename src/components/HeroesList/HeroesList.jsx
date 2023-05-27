import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuperheroes } from "redux/superheroes/operations";
import { getSuperheroesList } from "redux/superheroes/selectors";

export const HeroesList = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(getSuperheroesList);
  useEffect(() => {
    dispatch(getSuperheroes([0, 5]))
    console.log(superheroes);
  }, [dispatch]);
  return (
    <div>
      <p>Here I am</p>
    </div>
  );
};
