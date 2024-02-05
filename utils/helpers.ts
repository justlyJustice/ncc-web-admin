// import moment from "moment";

export const getCallStatus = (status: string): string => {
  switch (status) {
    case "ongoing":
      return "Ongoing Call";
    case "missed":
      return "Missed Call";
    case "finished":
      return "Finished Call";

    default:
      return "Unknown";
  }
};

export default function getRandomColor(letter) {
  const colors = [
    "#0000FF", // Blue
    "#FF0000", // Red
    "#F32F00", // Yellow
    "#00FF00", // Green
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#808080", // Dark Gray
    "#000080", // Navy
    "#FF4500", // Orange Red
    "#FF69B4", // Hot Pink
    "#00CED1", // Dark Turquoise
    "#800000", // Maroon
    "#FFD700", // Gold
    "#9400D3", // Dark Violet
    "#008080", // Teal
    "#800000", // Maroon
    "#B22222", // Fire Brick
    "#008B8B", // Dark Cyan
    "#DC143C", // Crimson
    "#4682B4", // Steel Blue
    "#2E8B57", // Sea Green
    "#4B0082", // Indigo
    "#7FFF00", // Chartreuse
    "#8A2BE2", // Blue Violet
    "#FA8072", // Salmon
    "#00FF7F", // Spring Green
    "#BA55D3", // Medium Orchid
    "#556B2F", // Dark Olive Green
  ];

  const index = letter.toUpperCase().charCodeAt(0) - 65; // Convert letter to uppercase and calculate index based on ASCII code
  const colorIndex = index % colors.length; // Get the corresponding color index

  return colors[colorIndex];
}

export const formatDate = (timestamp) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", options).replace("at", ",").trim();
};
