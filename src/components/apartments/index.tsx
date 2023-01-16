import { FC, useEffect, useState } from "react";
import { getItems } from "../../pages/api/getApartments";
import { Property } from "../../types/Property";
import styles from "./apartments.module.css";

const Apartments: FC<Property[]> = (data) => {
    const [items, setItems] = useState<Property[]>(data);
    // const getData = async () => {
    //     const result = getItems("1", "2");
    //     console.log("result", result);
    // };

    // useEffect(() => {
    //     getData();
    //     //    setItems(result);
    // });
    console.log(data.length, "length");

    return (
        <div>
            Appartments
            <ul className={styles.list}>
                {data.length > 0 &&
                    data.map(({ name }) => {
                        return <li key={name}></li>;
                    })}
            </ul>
        </div>
    );
};
export default Apartments;
