import React from "react";
import { PieChart } from "reaviz";
import { useSelector } from "react-redux";
import { showSR } from "../../features/srSlice";
function Pie_Chart() {
  const { srList } = useSelector(showSR);
  const Name = srList.map((item, i) =>
    item.Name.slice(0, 10).map((items) => items)
  );
  const Scores = srList.map((item, i) =>
    item.Scores.slice(0, 10).map((items) => items)
  );
  // const labels =Name[0];
  // const data = Scores[0];
  // const options = { fillColor: '#f66b0e', strokeColor: '#112b3c' };
  var data = [];
  for (var i = 0; i < Name[0].length; i++) {
    data = [...data, { key: Name[0][i], data: Scores[0][i].toFixed(2) }];
  }

  return (
    <div>
      <PieChart height={'500px'} width={'600px'} data={data} className='pieChart' />
    </div>
  );
}

export default Pie_Chart;
