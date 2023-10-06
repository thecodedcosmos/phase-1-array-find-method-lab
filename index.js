// code your solution here
function superbowlWin(records) {
  const result = records.find(record => record.result === "W");
  if (result) {
    return result.year;
  } else {
    return undefined;
  }
}