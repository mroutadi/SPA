const fs = require("fs");

var csvData;
var addeOmid = 0.01;

// Reading Datas
fs.readFile("input.csv", "utf8", function(err, data) {
    csvData = data.split("\n").map(function(row) {
        return row.split(",");
    });
    csvData.pop();

    csvData.forEach((i, indexI) => {
        csvData.forEach((x, indexX) => {
            // SecondPathCalc(csvData, indexI, indexX);
            csvData.forEach((z, indexZ) => {
                // ThirsPathCalc(csvData, indexI, indexX, indexZ);
                // FourthPathCalc(csvData, indexI, indexX, indexZ);
                csvData.forEach((y, indexY) => {
                    csvData.forEach((j, indexJ) => {
                        FirstPathCalc(csvData, indexI, indexX, indexZ, indexY, indexJ);
                    });
                });
            });
        });
    });
});

const FirstPathCalc = (table, i, x, z, y, j) => {
    if (
        (table[i][x] * table[x][y] * table[y][j]) /
        (1 - table[x][y] * (table[x][y] + table[x][y] * table[x][z])) >
        addeOmid
    ) {
        console.log("i:", i, " x:", x, " z:", z, " y:", y, " j:", j);
        console.log(
            "ix:",
            table[i][x],
            " xy:",
            table[x][y],
            " yj:",
            table[y][j],
            " xz:",
            table[x][z]
        );
        console.log(table[i][x] * table[x][y] * table[y][j]) /
            (1 - table[x][y] * (table[x][y] + table[x][y] * table[x][z]));
    }
};

const SecondPathCalc = (table, i, j) => {
    if (
        table[i][j] > addeOmid
    ) {
        console.log("i:", i, " j:", j);
        console.log(
            "ij:",
            table[i][j]
        );
        console.log(table[i][j]);
    }
};

const ThirsPathCalc = (table, i, s, j) => {
    if (
        table[i][s] * table[s][j] > addeOmid
    ) {
        console.log("i:", i, "s:", s, " j:", j);
        console.log(
            "is:",
            table[i][s],
            " sj:",
            table[s][j],
        );
        console.log(table[i][s] * table[s][j]);
    }
};

const FourthPathCalc = (table, i, v, j) => {
    if (
        (table[i][v] * table[v][j]) / (1 - table[v][v]) > addeOmid
    ) {
        console.log("i:", i, "v:", v, " j:", j);
        console.log(
            "iv:",
            table[i][v],
            " vj:",
            table[v][j],
            " vv:",
            table[v][v],
        );
        console.log(table[i][v] * table[v][j]) / (1 - table[v][v]);
    }
};