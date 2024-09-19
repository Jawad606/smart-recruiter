import React from "react";
import { useSelector } from "react-redux";
import { showSR } from "../../features/srSlice";
import { BarChart } from "reaviz";
function Histogram_Chart() {
  const { srList } = useSelector(showSR);
  const Name = srList.map((item, i) =>
    item.Name.slice(0, 10).map((items) => items)
  );
  const Scores = srList.map((item, i) =>
    item.Scores.slice(0, 10).map((items) => items)
  );
  var data = [];
  for (var i = 0; i < Name[0].length; i++) {
    data = [...data, { key: Name[0][i], data: Scores[0][i].toFixed(2) }];
  }

  return (
    <div>
      <BarChart height={500} width={600} data={data} />
    </div>
  );
}

export default Histogram_Chart;
