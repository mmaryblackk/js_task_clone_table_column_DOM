/* eslint-disable no-console */ "use strict";
const rows = document.querySelectorAll("tr");
for (const row of rows){
    const rowCell = row.cells[1];
    const clone = rowCell.cloneNode(true);
    row.insertBefore(clone, row.cells[4]);
}

//# sourceMappingURL=index.f75de5e1.js.map
