export const lineData = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Ma", "Jun", "Jul"],
    datasets: [
      {
        label: "Data One",
        backgroundColor: "#1594B6",
        data: [40, 39, 20, 40, 39, 80, 40],
      },
    ],
  },
  options: {
    responsive: true,
    tension: 0.6,
    borderColor: "#1594B6",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // This will hide the legend (label)
      },
      title: {
        display: true, // Enable the title
        text: "Recent Wortkflow", // Set the title text here
        font: {
          size: 16, // Optionally set the font size of the title
        },
        align: "start",
      },
    },
    scales: {
      x: {
        // display: false, // Hides the x-axis labels
        grid: {
          display: false, // Hides the grid lines for the x-axis
        },
      },
      y: {
        display: false, // Hides the y-axis labels
        grid: {
          display: false, // Hides the grid lines for the y-axis
        },
      },
    },
  },
};
export const barData = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Ma", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Data One",
        backgroundColor: "#1594B6",
        data: [40, 20, 12, 39, 10, 40, 39, 80],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false, // This will hide the legend (label)
      },
      title: {
        display: true, // Enable the title
        text: "Recent Marketing", // Set the title text here
        font: {
          size: 16, // Optionally set the font size of the title
        },
        align: "start",
      },
    },
    scales: {
      x: {
        // display: false, // Hides the x-axis labels
        grid: {
          display: false, // Hides the grid lines for the x-axis
        },
      },
      y: {
        display: false, // Hides the y-axis labels
        grid: {
          display: false, // Hides the grid lines for the y-axis
        },
      },
    },
  },
};
export const cardData = [
  { title: "Documents", value: "146.000" },
  { title: "Contacts", value: "1,400" },
  { title: "Emails", value: "150.700" },
];
export const sideBarData = [
  "Management",
  "Document",
  "Contact",
  "Prospect",
  "Workflow",
  "Connection",
  "Marketing Automation",
  "Email Integration",
  "Customer",
  "Transaction",
  "Maintenance",
];
export const productData = {
  products: ["Gadget Converter", "Lens Camera", "Airpods", "Macbook"],
  chatPeople: [
    "Debra Young",
    "Dorothy Collins",
    "Chris Jordan",
    "Denise Murphy",
  ],
};
export const documentsData = {
  documents: [
    {
      name: "Annual Report",
      file: "PDF",
      category: "Property",
      author: "Diana Matthews",
      status: "Send",
    },
    {
      name: "Business Plan",
      file: "WORD",
      category: "Cryptocurrency",
      author: "Philip James",
      status: "Send",
    },
    {
      name: "Marketing Tool",
      file: "PDF",
      category: "Content Creator",
      author: "Amanda Ross",
      status: "Pending",
    },
  ],
};
