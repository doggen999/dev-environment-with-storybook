const fs = require("fs");
function content(name) {
  return `import React from 'react';\r
import ${name} from './';\r
export default {\r
\ttitle: 'Components/${name}',\r
\tparameters: {\r
\t\tcomponent: ${name},\r
\t},\r
};\r
export const all${name} = () => (<${name} />);\r`;
}
module.exports = {
  generate: function (name, path) {
    return fs.writeFileSync(
      path,
      content(name[0].toUpperCase() + name.substring(1))
    );
  },
};
