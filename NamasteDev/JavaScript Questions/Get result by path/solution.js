function getResultByPath(path, obj) {
  //write your implementation here
  const normalizedPath = path.replace(/\[(\d+)\]/g, '.$1')
  const keys = normalizedPath.split('.')

  let res = obj
  for (let key of keys) {
    if (res === undefined || res === null) break
    res = res[key]
  }
  return res
}
const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}
getResultByPath(path, obj);
module.exports = getResultByPath;
