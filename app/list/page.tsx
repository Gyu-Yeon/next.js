"use client";
import { useState } from "react";

export default function List() {
  let product: string[] = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState<number[]>([0, 0, 0]);

  const addCount = (i: number) => {
    if (count[i] < 10) {
      count[i] = count[i] + 1;
      let changed = [...count];
      setCount(changed);
      console.log(count);
    } else {
      window.alert("You cannot add more!!");
    }
  };

  const subCount = (i: number) => {
    if (count[i] > 0) {
      count[i] = count[i] - 1;
      let changed = [...count];
      setCount(changed);
    } else {
      window.alert("You cannot remove less than 0!!");
    }
  };
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" alt="food" />
            <h4>{item} $40</h4>
            <span> {count[i]} </span>
            <button
              onClick={() => {
                addCount(i);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                subCount(i);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
