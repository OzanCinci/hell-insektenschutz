// UsageChart.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
    width: 80vw;
    min-width: 800px;
    margin: auto;
`;

const config = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};

const ozanApiKey = process.env.REACT_APP_SERP_API_KEY;

const monthNames = {
  January: 'Januar',
  February: 'Februar',
  March: 'März',
  April: 'April',
  May: 'Mai',
  June: 'Juni',
  July: 'Juli',
  August: 'August',
  September: 'September',
  October: 'Oktober',
  November: 'November',
  December: 'Dezember',
};

const NumberOfVisitors = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.scaleserp.com/account?api_key=${ozanApiKey}`;
        const result = await axios.get(url, config);
        setResponse(result.data);
        const currentMonth = result.data.account_info.usage_history.find(monthData => monthData.is_current_month);
        setSelectedMonth(currentMonth ? currentMonth.month : '');
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div><CircularProgress color='warning'/></div>;
  if (error) return <div>Fehler: {error.message}</div>;

  const usageHistory = response?.account_info?.usage_history;
  if (!usageHistory) {
    return <div>Keine Nutzungsdaten verfügbar</div>;
  }

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const currentMonthData = usageHistory.find(monthData => monthData.month === selectedMonth);
  if (!currentMonthData) {
    return <div>Keine Daten für den ausgewählten Monat verfügbar</div>;
  }

  const labels = Object.keys(currentMonthData.credits_total_per_day);
  const data = Object.values(currentMonthData.credits_total_per_day);
  const maxYValue = Math.max(...data); // Adding a buffer to the max value

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Anzahl der Besucher',
        data,
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Changed to orange
        borderColor: 'rgba(255, 159, 64, 1)', // Changed to orange
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${currentMonthData.credits_total_for_month} Besuche im ${monthNames[currentMonthData.month]} ${currentMonthData.year}`,
        font: {
          size: 18, // Title font size
        },
      },
      tooltip: {
        titleFont: {
          size: 16, // Tooltip title font size
        },
        bodyFont: {
          size: 14, // Tooltip body font size
        },
        callbacks: {
          title: function (context) {
            const day = context[0].label;
            return `${day}. ${monthNames[selectedMonth]}`;
          },
          label: function (context) {
            const value = context.raw;
            return `Anzahl der Besucher: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: maxYValue,
        ticks: {
          font: {
            size: 14, // Y-axis font size
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14, // X-axis font size
          },
        },
      },
    },
  };

  return (
    <Container>
      <label htmlFor="month-select" style={{ fontSize: '16px' }}>Monat auswählen: </label>
      <select id="month-select" value={selectedMonth} onChange={handleMonthChange} style={{ fontSize: '16px' }}>
        {usageHistory.map(monthData => (
          <option key={monthData.month} value={monthData.month}>
            {monthNames[monthData.month]} {monthData.year}
          </option>
        ))}
      </select>
      <Bar data={chartData} options={options} />
    </Container>
  );
};

export default NumberOfVisitors;
