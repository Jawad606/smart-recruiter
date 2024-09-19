import React from "react";
import { AreaChart } from "reaviz";
import { useSelector } from "react-redux";
import { showSR } from "../../features/srSlice";
function Readial_Chart() {
  const { srList } = useSelector(showSR);
  const Name = srList.map((item, i) =>
    item.Name.slice(0, 10).map((items) => items)
  );
  const Scores = srList.map((item, i) =>
    item.Scores.slice(0, 10).map((items) => items)
  );
  var data = [];
  for (var i = 0; i < Name[0].length; i++) {
    data = [...data, { key: Name[0][i], data: Scores[0][i] }];
  }

  return (
    <div>
       <AreaChart
    height={300}
    width={300}
    data={[
      { key: new Date('11/29/2019'), data: 13 },
      { key: new Date('11/30/2019'), data: 13 },
      { key: new Date('12/1/2019'), data: 13 },
    ]}
  />
    </div>
  );
}

export default Readial_Chart;
