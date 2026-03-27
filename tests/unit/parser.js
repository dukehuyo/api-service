const xml2js = require('xml2js');
const js2xml = new xml2js.Builder({ headless: true, renderOpts: { pretty: true, indent: '  ' } });

function parseXml(xmlString) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function generateXml(data) {
  return js2xml.buildObject(data);
}

module.exports = {
  parseXml,
  generateXml
};