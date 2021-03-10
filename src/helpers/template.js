module.exports = (object, str) => {
  const patterns = str.match(/{{.+}}/gm);
  patterns.map((item) => (str = str.replace(item, object[item.replace(/[^a-zA-Z _ ]/g, '')])));
  return str;
};
