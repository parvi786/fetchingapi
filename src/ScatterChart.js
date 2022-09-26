import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
function ScatterChart() {
  const [socialFirst, setsocialFirst] = useState();
  const [socialSecond, setsocialSecond] = useState();
  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get("./data.json");
      const data = res.data;
      let colorintensityName = [];
      let hueName = [];
      data.forEach((element) => {
        colorintensityName.push(element.Colorintensity);
        hueName.push(element.Hue);
      });
      setsocialSecond(colorintensityName);
      setsocialFirst(hueName);
    };
    getApiData();
  }, []);
  const options = {
    title: {
      text: "Scatterchart between Color Intensity and Hue ",
    },
    grid: {},
    xAxis: {
      type: "category",
      data: socialSecond,
      name: "Color Intensity",
      nameLocation: "center",
      nameTextStyle: { fontSize: 20, padding: 20 },
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "center",
      nameTextStyle: { fontSize: 20, padding: 15 },
    },
    series: [
      {
        data: socialFirst,
        type: "scatter",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div>
      <div>
        <ReactECharts option={options} />
      </div>
    </div>
  );
}

export default ScatterChart;

/*
BY USING FETCH METHOD
useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let colorintensityName = [];
        let hueName = [];
        data.forEach((element) => {
          colorintensityName.push(element.Colorintensity);
          hueName.push(element.Hue);
        });
        setsocialSecond(colorintensityName);
        setsocialFirst(hueName);
      });
  }, []);*/

/* IMPORT JSON DATA AS DATA
  /*import React, { useEffect } from "react";
import data from "./dbb.json";
import { useState } from "react";
import ReactECharts from "echarts-for-react";

function ScatterChart() {
  const [socialFirst, setsocialFirst] = useState();
  const [socialSecond, setsocialSecond] = useState();
  useEffect(() => {
    const selectChart = () => {
      //creating two arryas to put the values of colorintensity and hue of all class.
      let colorintensityName = [];
      let hueName = [];
      //pushing values of colorintensity and hue of all class in the arrays.
      data.forEach((element) => {
        colorintensityName.push(element.Colorintensity);
        hueName.push(element.Hue);
      });
      setsocialSecond(colorintensityName);
      setsocialFirst(hueName);
    };

    selectChart();
  }, []);  */
