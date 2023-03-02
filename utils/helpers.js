// This function takes a date string and returns a formatted date string in MM/DD/YYYY format
function formatDate(date) {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
}

// Exporting the formatDate function as a property of an object
module.exports = {
  formatDate
}