// Sidebar Icons
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard Icon
import SavingsIcon from '@mui/icons-material/Savings'; // Finance Tracker

export const sidebarList = [
    { name: "Dashboard", link: "/pages/dashboard", icon: <DashboardIcon /> },
    { name: "Finance Tracker", link: "/pages/financeTracker", icon: <SavingsIcon /> },
];

export const stockList = [
    {id: 1, name: "SBI", color: "#e23270", value: "542.30", arrow: "down", link: "https://www.moneycontrol.com/mc/stock/chart?scId=SBI&exchangeId=SBIN&ex=NSE"},
    {id: 2, name: "LIC", color: "#f60d10", value: "547.30", arrow: "down", link: "https://www.moneycontrol.com/mc/stock/chart?scId=LIC09&exchangeId=LICI&ex=NSE"},
    {id: 3, name: "TCS.NS", color: "#f4d247", value: "3106.85", arrow: "up", link: "https://www.moneycontrol.com/mc/stock/chart?scId=TCS&exchangeId=TCS&ex=NSE"},
    {id: 4, name: "ITC.NS", color: "#2e88ec", value: "408.00", arrow: "up", link: "https://www.moneycontrol.com/mc/stock/chart?scId=ITC&exchangeId=ITC&ex=NSE"},
    {id: 5, name: "IBN", color: "#652fa1", value: "1804.08", arrow: "up", link: "https://www.moneycontrol.com/mc/stock/chart?scId=ICI02&exchangeId=ICICIBANK&ex=NSE"},
    {id: 6, name: "INFY", color: "#51ab55", value: "1227.00", arrow: "up", link: "https://www.moneycontrol.com/mc/stock/chart?scId=IT&exchangeId=INFY&ex=NSE"},
    {id: 7, name: "ATGL.NS", color: "#8b4513", value: "917.00", arrow: "down", link: "https://www.moneycontrol.com/mc/stock/chart?scId=ADG01&exchangeId=ATGL&ex=NSE"},
    {id: 8, name: "LT.NS", color: "#dc05f7", value: "2215.20", arrow: "down", link: "https://www.moneycontrol.com/mc/stock/chart?scId=LT&exchangeId=LT&ex=NSE"},
    {id: 9, name: "AZRE", color: "#00ffff", value: "213.31", arrow: "up", link: "https://www.moneycontrol.com/mc/stock/chart?scId=HC09&exchangeId=531783&ex=BSE"},
    {id: 10, name: "AWL", color: "#fb8c00", value: "403.85", arrow: "down", link: "https://www.moneycontrol.com/mc/stock/chart?scId=AW01&exchangeId=AWL&ex=NSE"},
];