var fs = require('fs');
var sm = require('source-map');

if (process.argv.length < 6) {
  console.log("node sourcemap.js <file> <operation> <line> <column>");
  console.log("Arguments:");
  console.log("\tfile - sourcemap file");
  console.log("\toperation - possible values:");
  console.log("\t\tsource - gets position in the original file");
  console.log("\t\ttarget - gets position in generated file");
  console.log("\tline - line number");
  console.log("\tcolumn - column number");
  console.log();
  console.log("Program returns two numbers spearated by space.");
  console.log("Numbers represent line and column after translation by source map.");
  process.exit();
}

// Get program arguments
var file = process.argv[2];
var operation = process.argv[3];
var line = parseInt(process.argv[4]);
var column = parseInt(process.argv[5]);

fs.readFile(file, function(err, sourceMap) {
  if(err) throw err;

  var smc = new sm.SourceMapConsumer(""+sourceMap);
  var out = "0 0";

  if (operation === "source") {
    out = smc.originalPositionFor({
      line: line,
      column: column
    });
  }
  else if (operation === "target") {
    var out =  smc.generatedPositionFor({
      source: smc.sources[0],
      line: line,
      column: column
    });
  }

  console.log(out.line, out.column);
});
