const chartJson = {
  "yKey": "age",
  "xKey": "name",
  "prefix": "%",
  "employeeData": 
    [
      {
        name: 'Adam',
        age: 20,
        salary: 30100
      },
      {
        name: 'Bob',
        age: 60,
        salary: 102000
      },
      {
        name: 'Carla',
        age: 31,
        salary: 57000
      },
      {
        name: 'Dave',
        age: 42,
        salary: 22000
      },
      {
        name: 'Ethel',
        age: 80,
        salary: 91000
      },
      {
        name: 'Frank',
        age: 28,
        salary: 73000 
      },
      {
        name: 'Gina',
        age: 21,
        salary: 16000
      }
    ]
}

const colors = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
const chart = document.createElement('section');
const barChart = document.createElement('table');
const titleRow = document.createElement('tr');
const titleData = document.createElement('td');

titleData.setAttribute('rowspan', chartJson.employeeData.length + 1);
titleData.innerText = chartJson.title;

barChart.appendChild(titleRow);
chart.appendChild(barChart);

const barRow = document.createElement('tr');

for (let i = 0; i < chartJson.employeeData.length; i++) {
  barRow.setAttribute('class', 'bars');

  const prefix = chartJson.prefix || '';
  const barData = document.createElement('td');
  const bar = document.createElement('section');

  bar.setAttribute('class', colors[i]);

  bar.style.height = chartJson.employeeData[i][chartJson.yKey] + prefix;
  barData.innerText = chartJson.employeeData[i].name + ' : ' + chartJson.yKey + ' ' + chartJson.employeeData[i][chartJson.yKey];

  barData.appendChild(bar);
  barRow.appendChild(barData);
}

const legendRow = document.createElement('tr');
const legend = document.createElement('td');

barChart.appendChild(barRow);

document.getElementById('chart').innerHTML = chart.outerHTML;
