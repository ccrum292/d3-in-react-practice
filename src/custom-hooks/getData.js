import { useEffect, useState } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/8c131a74b85d0bb0246233de2cff3f52/raw/194c2fc143790b937c42bf086a5a44cb3c55340e/auto-mpg.csv";

const alterRow = d => {
  d.mpg = +d.mpg;
  d.year = +d.year;
  return d;
}

export const useData = () => {
  const [data, setData] = useState(null);

  const getCsv = async () => {
    try {
      const csvData = await csv(csvUrl, alterRow);
      console.log(csvData[100]);
      setData(csvData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCsv();
  }, [csvUrl]);


  return data
};